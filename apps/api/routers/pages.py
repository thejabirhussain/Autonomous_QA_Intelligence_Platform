from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from apps.api.database import get_db
from apps.api.models.core import User
from apps.api.core.auth import get_current_user

router = APIRouter(prefix="/api/v1/scans/{job_id}/pages", tags=["pages"])

@router.get("")
async def list_pages(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": f"List pages for scan {job_id} - not implemented"}

@router.get("/{page_id}")
async def get_page(job_id: str, page_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": f"Get page {page_id} - not implemented"}
