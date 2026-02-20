from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional, List, Dict, Any

class AuthConfig(BaseModel):
    auth_type: str  # "credentials", "token", "oauth2", "cookie"
    login_url: Optional[str] = None
    username_selector: Optional[str] = None
    password_selector: Optional[str] = None
    submit_selector: Optional[str] = None
    username: Optional[str] = None
    password: Optional[str] = None
    bearer_token: Optional[str] = None
    success_indicator: Optional[str] = None

class CrawlerConfig(BaseModel):
    target_url: str
    max_pages: int = 100
    max_depth: int = 5
    concurrent_pages: int = 3
    page_timeout: int = 30000       # ms
    wait_after_load: int = 2000     # ms
    respect_robots_txt: bool = True
    include_patterns: List[str] = []
    exclude_patterns: List[str] = []
    auth_config: Optional[AuthConfig] = None
    capture_screenshots: bool = True
    capture_dom: bool = True
    capture_network: bool = True
    capture_console: bool = True
    viewport_width: int = 1920
    viewport_height: int = 1080
    user_agent: str = "ReQon-QA-Bot/1.0"
    extra_headers: Dict[str, str] = {}
    cookies: List[Dict[str, Any]] = []

class PageData(BaseModel):
    url: str
    url_hash: str
    title: str
    http_status: int
    depth: int
    parent_url: Optional[str]
    dom_snapshot: str
    dom_structure: Dict[str, Any]
    screenshot_bytes: Optional[bytes] = None
    console_logs: List[Dict[str, Any]]
    network_requests: List[Dict[str, Any]]
    performance_metrics: Dict[str, Any]
    links_found: List[str]
    forms_found: List[Dict[str, Any]]
    interactive_elements: List[Dict[str, Any]]
    metadata: Dict[str, Any]
    crawled_at: datetime
    model_config = ConfigDict(arbitrary_types_allowed=True)

class RawIssue(BaseModel):
    detector_name: str
    category: str
    subcategory: str
    severity: str    # "critical", "high", "medium", "low", "info"
    title: str
    description: Optional[str] = None
    element_selector: Optional[str] = None
    element_html: Optional[str] = None
    evidence: Dict[str, Any] = {}
    is_false_positive: bool = False
    confidence_score: float = 1.0

class HygieneScore(BaseModel):
    overall_score: float
    grade: str
    category_scores: Dict[str, float]
    critical_count: int
    high_count: int
    medium_count: int
    low_count: int
    top_issues: List[RawIssue] = []
    improvement_potential: float
