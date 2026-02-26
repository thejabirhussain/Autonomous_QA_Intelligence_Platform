import asyncio
import os
import sys

sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from apps.api.database import async_session
from apps.api.models.core import User, Organization
from apps.api.core.security import get_password_hash
from sqlalchemy.future import select

async def seed_data():
    async with async_session() as session:
        # Check if user already exists
        result = await session.execute(select(User).where(User.email == "admin@reqon.ai"))
        user = result.scalar_one_or_none()
        
        if user:
            print("Admin user already exists.")
            return
            
        print("Creating default organization...")
        org = Organization(name="ReQon Admin", slug="reqon-admin")
        session.add(org)
        await session.flush()
        
        print("Creating default admin user...")
        new_user = User(
            email="admin@reqon.ai",
            full_name="System Administrator",
            hashed_password=get_password_hash("admin123"),
            org_id=org.id,
            role="owner",
            is_active=True
        )
        session.add(new_user)
        await session.commit()
        print("Default data seeded successfully. Login: admin@reqon.ai / admin123")

if __name__ == "__main__":
    asyncio.run(seed_data())
