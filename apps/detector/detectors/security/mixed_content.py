from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector
from urllib.parse import urlparse

class MixedContentDetector(BaseDetector):
    name = "mixed_content"
    category = "security"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        is_https = page_data.url.startswith("https")
        
        if not is_https:
            return issues
            
        for req in page_data.network_requests:
            url = req.get("url", "")
            if url.startswith("http://"):
                severity = "medium"
                if url.endswith(('.js', '.css')):
                    severity = "critical"
                    
                issues.append(self.create_issue(
                    subcategory="mixed_content",
                    severity=severity,
                    title="Mixed Content Detected",
                    description=f"Insecure resource loaded on secure page: {url}",
                    evidence={"url": url}
                ))
                
        return issues
