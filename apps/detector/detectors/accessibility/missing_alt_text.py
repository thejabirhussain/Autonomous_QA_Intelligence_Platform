from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class MissingAltTextDetector(BaseDetector):
    name = "missing_alt_text"
    category = "accessibility"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                const issues = [];
                document.querySelectorAll('img').forEach(img => {
                    const alt = img.getAttribute('alt');
                    const src = img.src || img.getAttribute('data-src');
                    if (alt === null) {
                        issues.push({src, reason: "missing_attribute"});
                    } else if (alt.includes('.jpg') || alt.includes('.png')) {
                        issues.push({src, current_alt: alt, reason: "filename_as_alt"});
                    }
                });
                return issues;
            }
            """
            violations = await page.evaluate(js_code)
            
            for v in violations:
                severity = "critical" if v["reason"] == "missing_attribute" else "high"
                title = "Missing Alt Attribute" if v["reason"] == "missing_attribute" else "Filename Used as Alt Text"
                issues.append(self.create_issue(
                    subcategory=v["reason"],
                    severity=severity,
                    title=title,
                    description=f"Image {v.get('src')} violates alt text rules.",
                    evidence=v
                ))
                
        return issues
