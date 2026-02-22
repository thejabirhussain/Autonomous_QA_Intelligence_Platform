import asyncio
import os
import sys

# Add the backend root to sys.path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from apps.api.database import engine
from apps.api.models.base import Base
from apps.api.models.core import User, Organization, ScanJob

async def init_models():
    print("Creating database tables...")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("Database tables created successfully.")

if __name__ == "__main__":
    asyncio.run(init_models())
