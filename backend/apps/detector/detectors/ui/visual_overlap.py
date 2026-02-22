from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class VisualOverlapDetector(BaseDetector):
    name = "visual_overlap"
    category = "ui"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            # Inject JS to check bounding client rects. Simplified placeholder here logic.
            # In a full implementation, we run O(N^2) rectangle overlap on key elements
            js_code = """
            () => {
                // Return mock overlap data to not hang the browser
                return [];
            }
            """
            overlaps = await page.evaluate(js_code)
            
            for overlap in overlaps:
                issues.append(self.create_issue(
                    subcategory="element_overlap",
                    severity="medium",
                    title="Visual Overlap Detected",
                    description="Two or more elements are overlapping visibly.",
                    evidence=overlap
                ))
                
        return issues
