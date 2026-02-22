from celery import Celery
import asyncio
import json
from datetime import datetime
from typing import Dict, Any
from reqon_config.settings import settings
import redis.asyncio as aioredis

from apps.crawler.crawler import AutonomousCrawler
from apps.detector.engine import DefectDetectionEngine
from reqon_types.models import CrawlerConfig, PageData, RawIssue
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from apps.api.models.core import Page, Issue, ScanJob
from apps.knowledge.graph_service import KnowledgeGraphService

celery_app = Celery(
    "reqon_crawler",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    task_track_started=True,
)

async def _run_crawler(job_id: str, config_dict: Dict[str, Any]):
    config = CrawlerConfig(**config_dict)
    crawler = AutonomousCrawler()
    detector_engine = DefectDetectionEngine()
    kg_service = KnowledgeGraphService()
    
    await kg_service.init_schema()
    
    engine = create_async_engine(settings.DATABASE_URL, echo=False)
    async_session = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
    
    redis_client = aioredis.from_url(settings.REDIS_URL)
    pubsub_channel = f"scan:{job_id}"
    
    async def publish_event(msg_text: str, msg_type: str = "info"):
        payload = json.dumps({
            "time": datetime.utcnow().isoformat().split('T')[1][:8],
            "msg": msg_text,
            "type": msg_type
        })
        await redis_client.publish(pubsub_channel, payload)

    try:
        async for event in crawler.start(config):
            if event.event_type == "scan_started":
                await publish_event("Scan started")
                
            elif event.event_type == "page_discovered":
                pass # Handled on crawled
                
            elif event.event_type == "page_crawled":
                page_data: PageData = event.data.pop("page_data")
                url = event.data["url"]
                await publish_event(f"Discovered and inspected {url}")
                
                # 1. Save Page to PostgreSQL
                db_page_id = None
                async with async_session() as db:
                    db_page = Page(
                        scan_job_id=job_id,
                        url=page_data.url,
                        url_hash=page_data.url_hash,
                        title=page_data.title,
                        http_status=page_data.http_status,
                        depth=page_data.depth,
                        parent_url=page_data.parent_url,
                        performance_metrics=page_data.performance_metrics,
                        network_requests=page_data.network_requests
                    )
                    db.add(db_page)
                    await db.commit()
                    await db.refresh(db_page)
                    db_page_id = db_page.id
                
                # 2. Add to Neo4j Graph
                await kg_service.add_page(job_id, page_data)
                
                # 3. Run Detectors
                issues: list[RawIssue] = await detector_engine.run_all(page_data)
                if issues:
                    # Save issues to Postgres
                    async with async_session() as db:
                        for r_issue in issues:
                            await publish_event(f"Defect detected on {url}: {r_issue.title} (Severity: {r_issue.severity})", "warn")
                            db_issue = Issue(
                                scan_job_id=job_id,
                                page_id=db_page_id,
                                detector_name=r_issue.detector_name,
                                category=r_issue.category,
                                subcategory=r_issue.subcategory,
                                severity=r_issue.severity,
                                title=r_issue.title,
                                description=r_issue.description,
                                element_selector=r_issue.element_selector,
                                element_html=r_issue.element_html,
                                confidence_score=r_issue.confidence_score
                            )
                            db.add(db_issue)
                        await db.commit()
                    
                    # Save issues to Neo4j
                    await kg_service.add_issues(page_data.url, issues)
                    
            elif event.event_type == "scan_completed":
                await publish_event("Scan Complete. Generating Knowledge Graph...")
                
                # Update job status
                async with async_session() as db:
                    from sqlalchemy.future import select
                    stmt = select(ScanJob).filter_by(id=job_id)
                    result = await db.execute(stmt)
                    job = result.scalars().first()
                    if job:
                        job.status = "completed"
                        job.completed_at = datetime.utcnow()
                        job.total_pages_crawled = event.data.get("total_pages_crawled", 0)
                        await db.commit()
                        
    finally:
        await kg_service.close()
        await redis_client.aclose() if hasattr(redis_client, 'aclose') else await redis_client.close()

    return {"status": "completed", "job_id": job_id}

@celery_app.task(bind=True, name="crawl_job")
def crawl_job(self, job_id: str, config_dict: Dict[str, Any]):
    return asyncio.run(_run_crawler(job_id, config_dict))
