from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

# Simulating a check for indexability issues
class CrawlabilityDetector(BaseDetector):
    name = "crawlability"
    category = "seo"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                const robots = document.querySelector('meta[name="robots"]')?.content || "";
                return robots.toLowerCase();
            }
            """
            robots_content = await page.evaluate(js_code)
            
            if "noindex" in robots_content and page_data.depth == 0:
                issues.append(self.create_issue(
                    subcategory="noindex_homepage",
                    severity="critical",
                    title="Homepage is No-Indexed",
                    description="The main entry point has a 'noindex' robots meta tag.",
                    evidence={"robots_meta": robots_content}
                ))
                
        return issues
