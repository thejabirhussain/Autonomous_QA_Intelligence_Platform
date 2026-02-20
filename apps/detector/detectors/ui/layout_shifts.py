from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class LayoutShiftDetector(BaseDetector):
    name = "layout_shifts"
    category = "ui"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        # Detailed CLS logic usually requires running PerformanceObserver in browser context during navigation.
        # This will be stubbed as relying on the `performance_metrics` dict from the crawler.
        issues = []
        cls_score = page_data.performance_metrics.get("cls", 0)
        
        if cls_score > 0.25:
            issues.append(self.create_issue(
                subcategory="high_cls",
                severity="high",
                title="Severe Cumulative Layout Shift",
                description=f"CLS score is {cls_score} (Poor > 0.25).",
                evidence={"cls": cls_score}
            ))
        elif cls_score > 0.1:
            issues.append(self.create_issue(
                subcategory="medium_cls",
                severity="medium",
                title="Moderate Cumulative Layout Shift",
                description=f"CLS score is {cls_score} (Needs Improvement > 0.1).",
                evidence={"cls": cls_score}
            ))
            
        return issues
