from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from apps.api.database import get_db
from apps.api.models.core import User
from apps.api.core.auth import get_current_user

router = APIRouter(prefix="/api/v1/scans/{job_id}/issues", tags=["issues"])

@router.get("")
async def list_issues(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": f"List issues for scan {job_id} - not implemented"}

@router.get("/{issue_id}")
async def get_issue(job_id: str, issue_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": f"Get issue {issue_id} - not implemented"}

@router.patch("/{issue_id}")
async def update_issue_status(job_id: str, issue_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": f"Update issue {issue_id} - not implemented"}
