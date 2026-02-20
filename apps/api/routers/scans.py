from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from apps.api.database import get_db
from apps.api.models.core import User
from apps.api.core.auth import get_current_user

router = APIRouter(prefix="/api/v1/scans", tags=["scans"])

@router.post("")
async def create_scan(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": "Create scan - not implemented"}

@router.get("")
async def list_scans(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": "List scans - not implemented"}

@router.get("/{job_id}")
async def get_scan(job_id: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": f"Get scan {job_id} - not implemented"}
