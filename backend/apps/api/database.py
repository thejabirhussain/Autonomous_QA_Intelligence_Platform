from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from reqon_config.settings import settings

engine = create_async_engine(settings.DATABASE_URL, echo=False)

async_session = async_sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)

async def get_db():
    async with async_session() as session:
        yield session
