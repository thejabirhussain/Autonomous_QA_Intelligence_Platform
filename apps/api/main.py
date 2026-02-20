from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from reqon_config.settings import settings
from reqon_utils.logger import setup_logger

logger = setup_logger("reqon-api")

app = FastAPI(
    title="ReQon Intelligence Platform API",
    version="1.0.0",
    description="Autonomous Bug & Hygiene Discovery Engine API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS.split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from apps.api.routers import auth, scans, pages, issues, reports, org

app.include_router(auth.router)
app.include_router(scans.router)
app.include_router(pages.router)
app.include_router(issues.router)
app.include_router(reports.router)
app.include_router(org.router)
