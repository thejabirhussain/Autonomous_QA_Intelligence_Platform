from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from apps.api.database import get_db
from apps.api.models.core import User
from apps.api.core.auth import get_current_user

router = APIRouter(prefix="/api/v1/scans/{job_id}/reports", tags=["reports"])

@router.post("/pdf")
async def generate_pdf(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": f"Generate PDF for {job_id} - not implemented"}

@router.post("/excel")
async def generate_excel(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": f"Generate Excel for {job_id} - not implemented"}
