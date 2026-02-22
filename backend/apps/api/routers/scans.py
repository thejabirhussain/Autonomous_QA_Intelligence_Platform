from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from apps.api.database import get_db
from apps.api.models.core import User, ScanJob
from apps.api.core.auth import get_current_user
from reqon_types.models import CrawlerConfig
from apps.crawler.tasks import crawl_job

router = APIRouter(prefix="/api/v1/scans", tags=["scans"])

@router.post("")
async def create_scan(config: CrawlerConfig, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    # Create scan job
    job = ScanJob(
        org_id=current_user.org_id,
        created_by=current_user.id,
        target_url=config.target_url,
        job_name=f"Scan for {config.target_url}",
        status='running',
        config=config.model_dump(mode='json')
    )
    db.add(job)
    await db.commit()
    await db.refresh(job)
    
    # Trigger celery task
    crawl_job.delay(str(job.id), config.model_dump(mode='json'))
    
    return {"message": "Scan job initiated", "job_id": str(job.id)}

@router.get("")
async def list_scans(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    stmt = select(ScanJob).filter_by(org_id=current_user.org_id).order_by(ScanJob.created_at.desc())
    result = await db.execute(stmt)
    jobs = result.scalars().all()
    return {"jobs": jobs}

@router.get("/{job_id}")
async def get_scan(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    stmt = select(ScanJob).filter_by(id=job_id, org_id=current_user.org_id)
    result = await db.execute(stmt)
    job = result.scalars().first()
    if not job:
        raise HTTPException(status_code=404, detail="Scan Job not found")
    return job

@router.get("/{job_id}/graph")
async def get_scan_graph(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    # Verify ownership
    stmt = select(ScanJob).filter_by(id=job_id, org_id=current_user.org_id)
    job = (await db.execute(stmt)).scalars().first()
    if not job:
        raise HTTPException(status_code=404, detail="Scan Job not found")
        
    from apps.knowledge.graph_service import KnowledgeGraphService
    kg_service = KnowledgeGraphService()
    try:
        graph_data = await kg_service.get_graph_data(job_id)
        return graph_data
    finally:
        await kg_service.close()
