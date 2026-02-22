from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class DeadEndDetector(BaseDetector):
    name = "dead_links"
    category = "functional"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        # Page has no outgoing links
        if len(page_data.links_found) == 0:
            issues.append(self.create_issue(
                subcategory="orphan_page",
                severity="medium",
                title="Dead End Page",
                description="This page has no outgoing links to other pages.",
                evidence={"url": page_data.url}
            ))
            
        return issues
