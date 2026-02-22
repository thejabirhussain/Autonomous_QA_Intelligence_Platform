from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class SlowResourcesDetector(BaseDetector):
    name = "slow_resources"
    category = "performance"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            # Requires tracking resource timing API
            js_code = """
            () => {
                const issues = [];
                const resources = window.performance.getEntriesByType("resource");
                resources.forEach(r => {
                    const duration = r.duration;
                    if (duration > 2000) {
                        issues.push({
                            url: r.name,
                            type: r.initiatorType,
                            duration: duration
                        });
                    }
                });
                return issues;
            }
            """
            slow_resources = await page.evaluate(js_code)
            
            for res in slow_resources:
                issues.append(self.create_issue(
                    subcategory="slow_resource",
                    severity="high" if res["duration"] > 5000 else "medium",
                    title="Slow Loading Resource",
                    description=f"Resource {res['url']} took {res['duration']:.0f}ms to load.",
                    evidence=res
                ))
                
        return issues
