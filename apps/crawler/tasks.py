from celery import Celery
import asyncio
from typing import Dict, Any
from reqon_config.settings import settings
from apps.crawler.crawler import AutonomousCrawler
from reqon_types.models import CrawlerConfig

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
    # Note: In a real implementation this would stream events back via Redis PubSub
    # so the API WebSocket can push them to the frontend.
    crawler = AutonomousCrawler()
    config = CrawlerConfig(**config_dict)
    
    # We will need to save the page data to DB here or emit it to a queue for another worker to save it and run defect detection
    async for event in crawler.start(config):
        # Redis publish event to standard channel for websocket consumptions
        pass
        
    return {"status": "completed", "job_id": job_id}

@celery_app.task(bind=True, name="crawl_job")
def crawl_job(self, job_id: str, config_dict: Dict[str, Any]):
    return asyncio.run(_run_crawler(job_id, config_dict))
