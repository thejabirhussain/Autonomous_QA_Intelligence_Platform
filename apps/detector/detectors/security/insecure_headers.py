from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class InsecureHeadersDetector(BaseDetector):
    name = "insecure_headers"
    category = "security"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        # In actual Playwright implementation, we would extract response headers from the main page navigation request
        # Since PageData doesn't explicitly store main document headers yet, this is a planned heuristic
        # Will assume we extract it from `network_requests` for the main URL
        main_req = next((r for r in page_data.network_requests if r.get('url') == page_data.url), None)
        
        if main_req and "headers" in main_req:
            headers = {k.lower(): v for k, v in main_req["headers"].items()}
            
            missing_headers = []
            if "content-security-policy" not in headers:
                missing_headers.append("Content-Security-Policy")
            if "x-frame-options" not in headers:
                missing_headers.append("X-Frame-Options")
            if "x-content-type-options" not in headers:
                missing_headers.append("X-Content-Type-Options")
            if page_data.url.startswith("https") and "strict-transport-security" not in headers:
                missing_headers.append("Strict-Transport-Security")
                
            for h in missing_headers:
                issues.append(self.create_issue(
                    subcategory="missing_header",
                    severity="medium",
                    title=f"Missing Security Header: {h}",
                    description=f"The page response is lacking the {h} header.",
                    evidence={"header": h}
                ))
                
        return issues
