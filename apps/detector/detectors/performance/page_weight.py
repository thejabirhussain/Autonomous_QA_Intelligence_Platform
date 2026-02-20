from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class PageWeightDetector(BaseDetector):
    name = "page_weight"
    category = "performance"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                const resources = window.performance.getEntriesByType("resource");
                let totalBytes = 0;
                resources.forEach(r => {
                    if (r.transferSize) {
                        totalBytes += r.transferSize;
                    }
                });
                return { totalBytes, requestCount: resources.length };
            }
            """
            stats = await page.evaluate(js_code)
            total_mb = stats.get("totalBytes", 0) / (1024 * 1024)
            req_count = stats.get("requestCount", 0)
            
            if total_mb > 5:
                issues.append(self.create_issue(
                    subcategory="heavy_page",
                    severity="critical",
                    title="Critical Page Weight",
                    description=f"Total page weight is {total_mb:.2f}MB (> 5MB).",
                    evidence=stats
                ))
            elif total_mb > 2:
                issues.append(self.create_issue(
                    subcategory="heavy_page",
                    severity="high",
                    title="High Page Weight",
                    description=f"Total page weight is {total_mb:.2f}MB.",
                    evidence=stats
                ))
                
            if req_count > 100:
                issues.append(self.create_issue(
                    subcategory="many_requests",
                    severity="high",
                    title="Too Many HTTP Requests",
                    description=f"Page makes {req_count} requests.",
                    evidence=stats
                ))
                
        return issues
