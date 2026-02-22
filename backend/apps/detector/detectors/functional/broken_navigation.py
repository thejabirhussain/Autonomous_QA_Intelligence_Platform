from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class BrokenNavigationDetector(BaseDetector):
    name = "broken_navigation"
    category = "functional"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        # Heuristic: Check if links in the "nav" tag are valid or just placeholder anchors.
        if page_data.dom_structure.get("has_nav"):
            # Further logic requires the `page` Playwright object
            # For static analysis on PageData, we flag "#" or "javascript:void(0)"
            nav_links = page_data.metadata.get("nav_links", [])
            for link in nav_links:
                href = link.get("href", "")
                text = link.get("text", "")
                
                if href in ("#", "javascript:void(0)", ""):
                    issues.append(self.create_issue(
                        subcategory="placeholder_nav",
                        severity="high",
                        title="Broken Navigation Link",
                        description=f"Navigation item '{text}' has no valid destination.",
                        evidence={"href": href, "text": text}
                    ))
        
        return issues
