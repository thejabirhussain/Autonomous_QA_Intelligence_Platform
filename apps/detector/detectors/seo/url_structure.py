from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector
from urllib.parse import urlparse

class UrlStructureDetector(BaseDetector):
    name = "url_structure"
    category = "seo"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        url = page_data.url
        parsed = urlparse(url)
        
        if len(url) > 200:
            issues.append(self.create_issue(
                subcategory="long_url",
                severity="medium",
                title="URL Too Long",
                description=f"URL is {len(url)} characters (Recommended: < 200).",
                evidence={"url": url}
            ))
            
        if any(c.isupper() for c in parsed.path):
            issues.append(self.create_issue(
                subcategory="mixed_case_url",
                severity="low",
                title="Mixed Case URL",
                description="URL contains uppercase characters, which can cause duplicate content issues.",
                evidence={"url": url}
            ))
            
        return issues
