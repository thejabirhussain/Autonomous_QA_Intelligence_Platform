import httpx
import asyncio
from typing import List, Any, Optional
from urllib.parse import urljoin

from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class BrokenLinksDetector(BaseDetector):
    name = "broken_links"
    category = "functional"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        timeout = httpx.Timeout(10.0)
        
        async def check_link(href: str) -> Optional[RawIssue]:
            url = urljoin(page_data.url, href)
            if not url.startswith('http') or any(url.startswith(scheme) for scheme in ['mailto:', 'tel:', 'javascript:']):
                return None
                
            try:
                async with httpx.AsyncClient(timeout=timeout, verify=False) as client:
                    response = await client.head(url, follow_redirects=True)
                    if response.status_code >= 400:
                        severity = "high"
                        if response.status_code >= 500:
                            severity = "critical"
                        elif response.status_code in (401, 403):
                            severity = "medium"
                            
                        return self.create_issue(
                            subcategory="http_error",
                            severity=severity,
                            title=f"Broken link returning HTTP {response.status_code}",
                            description=f"The link to {url} returned an error status.",
                            evidence={"url": url, "status_code": response.status_code}
                        )
            except httpx.RequestError as exc:
                return self.create_issue(
                    subcategory="connection_error",
                    severity="high",
                    title=f"Broken link: Connection failed",
                    description=f"Could not connect to {url}.",
                    evidence={"url": url, "error": str(exc)}
                )
            return None
            
        tasks = [check_link(link) for link in page_data.links_found]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        for res in results:
            if isinstance(res, RawIssue):
                issues.append(res)
                
        return issues
