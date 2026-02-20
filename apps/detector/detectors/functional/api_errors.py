from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class ApiErrorDetector(BaseDetector):
    name = "api_errors"
    category = "functional"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        for req in page_data.network_requests:
            status = req.get("status", 0)
            url = req.get("url", "")
            method = req.get("method", "GET")
            
            # Identify purely API calls by path or typical structure
            if status >= 400:
                severity = "critical" if status >= 500 else "high"
                
                issues.append(self.create_issue(
                    subcategory="http_api_error",
                    severity=severity,
                    title=f"Failed Network Request ({status})",
                    description=f"Request to {url} failed with status {status}.",
                    evidence={
                        "url": url,
                        "method": method,
                        "status": status
                    }
                ))
                
        return issues
