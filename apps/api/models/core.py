import uuid
from datetime import datetime
from sqlalchemy import Column, String, Boolean, Integer, Float, ForeignKey, DateTime, JSON, Text
from sqlalchemy.dialects.postgresql import UUID, JSONB, INET
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import Base

class Organization(Base):
    __tablename__ = "organizations"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    slug = Column(String(100), unique=True, nullable=False)
    plan = Column(String(50), default='free') # free, pro, enterprise
    settings = Column(JSONB, default={})
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    users = relationship("User", back_populates="organization", cascade="all, delete-orphan")
    scan_jobs = relationship("ScanJob", back_populates="organization", cascade="all, delete-orphan")

class User(Base):
    __tablename__ = "users"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    org_id = Column(UUID(as_uuid=True), ForeignKey('organizations.id', ondelete='CASCADE'))
    email = Column(String(255), unique=True, nullable=False)
    hashed_password = Column(String(255))
    full_name = Column(String(255))
    role = Column(String(50), default='viewer') # owner, admin, editor, viewer
    is_active = Column(Boolean, default=True)
    last_login = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    organization = relationship("Organization", back_populates="users")
    scan_jobs = relationship("ScanJob", back_populates="creator")

class ScanJob(Base):
    __tablename__ = "scan_jobs"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    org_id = Column(UUID(as_uuid=True), ForeignKey('organizations.id', ondelete='CASCADE'), index=True)
    created_by = Column(UUID(as_uuid=True), ForeignKey('users.id'))
    target_url = Column(Text, nullable=False)
    job_name = Column(String(255))
    status = Column(String(50), default='pending', index=True) # pending, running, completed, failed, cancelled
    config = Column(JSONB, default={})
    started_at = Column(DateTime(timezone=True))
    completed_at = Column(DateTime(timezone=True))
    total_pages_crawled = Column(Integer, default=0)
    total_issues_found = Column(Integer, default=0)
    overall_hygiene_score = Column(Float)
    error_message = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    organization = relationship("Organization", back_populates="scan_jobs")
    creator = relationship("User", back_populates="scan_jobs")
    pages = relationship("Page", back_populates="scan_job", cascade="all, delete-orphan")
    issues = relationship("Issue", back_populates="scan_job", cascade="all, delete-orphan")

class Page(Base):
    __tablename__ = "pages"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    scan_job_id = Column(UUID(as_uuid=True), ForeignKey('scan_jobs.id', ondelete='CASCADE'), index=True)
    url = Column(Text, nullable=False)
    url_hash = Column(String(64), nullable=False, index=True)
    page_type = Column(String(100))
    title = Column(Text)
    http_status = Column(Integer)
    depth = Column(Integer, default=0)
    parent_url = Column(Text)
    dom_snapshot_path = Column(Text)
    screenshot_path = Column(Text)
    performance_metrics = Column(JSONB)
    network_requests = Column(JSONB)
    hygiene_score = Column(Float)
    crawled_at = Column(DateTime(timezone=True), server_default=func.now())
    metadata_json = Column("metadata", JSONB, default={})
    
    scan_job = relationship("ScanJob", back_populates="pages")
    issues = relationship("Issue", back_populates="page", cascade="all, delete-orphan")
    hygiene_scores = relationship("HygieneScoreHistory", back_populates="page", cascade="all, delete-orphan")

class Issue(Base):
    __tablename__ = "issues"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    scan_job_id = Column(UUID(as_uuid=True), ForeignKey('scan_jobs.id', ondelete='CASCADE'), index=True)
    page_id = Column(UUID(as_uuid=True), ForeignKey('pages.id', ondelete='CASCADE'), index=True)
    detector_name = Column(String(100), nullable=False)
    category = Column(String(100), nullable=False, index=True)
    subcategory = Column(String(100))
    severity = Column(String(20), nullable=False, index=True) # critical, high, medium, low, info
    title = Column(Text, nullable=False)
    description = Column(Text)
    element_selector = Column(Text)
    element_html = Column(Text)
    screenshot_path = Column(Text)
    evidence = Column(JSONB)
    recommendation = Column(Text)
    code_snippet = Column(Text)
    confidence_score = Column(Float, default=1.0)
    is_false_positive = Column(Boolean, default=False)
    status = Column(String(50), default='open') # open, acknowledged, fixed, wont_fix
    first_seen = Column(DateTime(timezone=True), server_default=func.now())
    last_seen = Column(DateTime(timezone=True), server_default=func.now())
    
    scan_job = relationship("ScanJob", back_populates="issues")
    page = relationship("Page", back_populates="issues")

class HygieneScoreHistory(Base):
    __tablename__ = "hygiene_scores"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    page_id = Column(UUID(as_uuid=True), ForeignKey('pages.id', ondelete='CASCADE'))
    scan_job_id = Column(UUID(as_uuid=True), ForeignKey('scan_jobs.id', ondelete='CASCADE'))
    overall_score = Column(Float, nullable=False)
    functional_score = Column(Float)
    ui_score = Column(Float)
    performance_score = Column(Float)
    accessibility_score = Column(Float)
    seo_score = Column(Float)
    security_score = Column(Float)
    content_score = Column(Float)
    critical_count = Column(Integer, default=0)
    high_count = Column(Integer, default=0)
    medium_count = Column(Integer, default=0)
    low_count = Column(Integer, default=0)
    computed_at = Column(DateTime(timezone=True), server_default=func.now())
    
    page = relationship("Page", back_populates="hygiene_scores")

class AuditLog(Base):
    __tablename__ = "audit_logs"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    org_id = Column(UUID(as_uuid=True), ForeignKey('organizations.id'))
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id'))
    action = Column(String(200), nullable=False)
    resource_type = Column(String(100))
    resource_id = Column(UUID(as_uuid=True))
    metadata_json = Column("metadata", JSONB, default={})
    ip_address = Column(INET)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
