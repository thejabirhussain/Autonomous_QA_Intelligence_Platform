from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class ColorOnlyInfoDetector(BaseDetector):
    name = "color_only_info"
    category = "accessibility"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        # This requires visual AI or very specific CSS parsing.
        # We will use a heuristic looking for classes like '.text-red', '.error' without text labels or icons in Playwright
        if page:
            js_code = """
            () => {
                const issues = [];
                const errorElements = document.querySelectorAll('.error, .text-danger, .text-red-500');
                errorElements.forEach(el => {
                    // If it has color class but no explicit aria roles, aria-labels, or icons inside, it might be color-only
                    if (!el.getAttribute('role') && !el.querySelector('svg, i, img')) {
                        issues.push({
                            selector: el.tagName,
                            text: el.innerText.substring(0, 30),
                            reason: "Information may be conveyed by color alone."
                        });
                    }
                });
                return issues;
            }
            """
            violations = await page.evaluate(js_code)
            
            for v in violations:
                issues.append(self.create_issue(
                    subcategory="color_only",
                    severity="high",
                    title="Information Conveyed Only By Color",
                    description=v["reason"],
                    element_selector=v.get("selector"),
                    evidence=v
                ))
                
        return issues
