from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import func

from apps.api.database import get_db
from apps.api.models.core import User, ScanJob, Issue, Page
from apps.api.core.auth import get_current_user

router = APIRouter(prefix="/api/v1/scans/{job_id}/issues", tags=["issues"])

@router.get("")
async def list_issues(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    job_stmt = select(ScanJob).filter_by(id=job_id, org_id=current_user.org_id)
    job = (await db.execute(job_stmt)).scalars().first()
    if not job:
        raise HTTPException(status_code=404, detail="Scan Job not found")
        
    stmt = select(Issue, Page.url).join(Page, Issue.page_id == Page.id).filter(Issue.scan_job_id == job_id).order_by(Issue.first_seen.desc())
    result = await db.execute(stmt)
    
    issues_list = []
    for issue, page_url in result.all():
        issue_dict = {k: v for k, v in issue.__dict__.items() if not k.startswith('_')}
        issue_dict['page'] = page_url
        issue_dict['id'] = str(issue.id)[:8] # Short ID for UI
        issues_list.append(issue_dict)
        
    return {"issues": issues_list}

@router.get("/analytics")
async def get_issues_analytics(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    job_stmt = select(ScanJob).filter_by(id=job_id, org_id=current_user.org_id)
    job = (await db.execute(job_stmt)).scalars().first()
    if not job:
        raise HTTPException(status_code=404, detail="Scan Job not found")
        
    sev_stmt = select(Issue.severity, func.count(Issue.id)).filter_by(scan_job_id=job_id).group_by(Issue.severity)
    sev_result = await db.execute(sev_stmt)
    colors = {'critical': '#991b1b', 'high': '#ef4444', 'medium': '#f59e0b', 'low': '#3b82f6', 'info': '#64748b'}
    by_severity = [{"name": row[0].capitalize(), "value": row[1], "color": colors.get(row[0].lower(), '#64748b')} for row in sev_result.all()]
    
    cat_stmt = select(Issue.category, func.count(Issue.id)).filter_by(scan_job_id=job_id).group_by(Issue.category)
    cat_result = await db.execute(cat_stmt)
    by_category = [{"name": row[0], "count": row[1]} for row in cat_result.all()]
    
    return {
        "by_severity": by_severity,
        "by_category": by_category
    }

@router.get("/{issue_id}")
async def get_issue(job_id: str, issue_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    stmt = select(Issue).filter_by(id=issue_id, scan_job_id=job_id)
    result = await db.execute(stmt)
    issue = result.scalars().first()
    if not issue:
        raise HTTPException(status_code=404, detail="Issue not found")
    return issue

@router.patch("/{issue_id}")
async def update_issue_status(job_id: str, issue_id: str, status: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    stmt = select(Issue).filter_by(id=issue_id, scan_job_id=job_id)
    result = await db.execute(stmt)
    issue = result.scalars().first()
    if not issue:
        raise HTTPException(status_code=404, detail="Issue not found")
        
    issue.status = status
    await db.commit()
    await db.refresh(issue)
    return issue
