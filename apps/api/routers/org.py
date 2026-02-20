from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from apps.api.database import get_db
from apps.api.models.core import User
from apps.api.core.auth import get_current_user

router = APIRouter(prefix="/api/v1/org", tags=["organization"])

@router.get("")
async def get_org(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": "Get org - not implemented"}

@router.patch("")
async def update_org(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": "Update org - not implemented"}

@router.get("/members")
async def list_members(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return {"message": "List org members - not implemented"}
