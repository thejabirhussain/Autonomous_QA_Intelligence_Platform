from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class CoreWebVitalsDetector(BaseDetector):
    name = "core_web_vitals"
    category = "performance"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        metrics = page_data.performance_metrics
        
        lcp = metrics.get("lcp", 0)  # ms
        if lcp > 4000:
            issues.append(self.create_issue(
                subcategory="poor_lcp",
                severity="high",
                title="Poor LCP (Largest Contentful Paint)",
                description=f"LCP is {lcp}ms (Poor > 4000ms).",
                evidence={"lcp": lcp}
            ))
            
        fid = metrics.get("fid", 0) # ms
        if fid > 300:
            issues.append(self.create_issue(
                subcategory="poor_fid",
                severity="high",
                title="Poor FID (First Input Delay)",
                description=f"FID is {fid}ms (Poor > 300ms).",
                evidence={"fid": fid}
            ))
            
        ttfb = metrics.get("ttfb", 0)
        if ttfb > 1800:
            issues.append(self.create_issue(
                subcategory="slow_ttfb",
                severity="medium",
                title="Slow Time to First Byte",
                description=f"TTFB is {ttfb}ms.",
                evidence={"ttfb": ttfb}
            ))
            
        return issues
