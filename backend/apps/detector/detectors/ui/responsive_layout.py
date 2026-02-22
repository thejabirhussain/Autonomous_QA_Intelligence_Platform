from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class ResponsiveLayoutDetector(BaseDetector):
    name = "responsive_layout"
    category = "ui"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                return document.documentElement.scrollWidth > window.innerWidth;
            }
            """
            has_horizontal_scroll = await page.evaluate(js_code)
            
            if has_horizontal_scroll:
                issues.append(self.create_issue(
                    subcategory="horizontal_scroll",
                    severity="high",
                    title="Horizontal Scroll Detected",
                    description="The page content overflows the viewport width.",
                    evidence={"viewport_width": "current"}
                ))
                
        return issues
