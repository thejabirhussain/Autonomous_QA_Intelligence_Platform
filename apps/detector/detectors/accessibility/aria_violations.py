from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class AriaViolationsDetector(BaseDetector):
    name = "aria_violations"
    category = "accessibility"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        # Usually implemented with an embedded axe-core script injection in Playwright.
        # This is a stub for the architecture mimicking the same output.
        issues = []
        
        if page:
            js_code = """
            () => {
                const issues = [];
                // Detect aria-hidden on focusable elements
                const hiddenFocusables = document.querySelectorAll('[aria-hidden="true"]');
                hiddenFocusables.forEach(el => {
                    if (el.tagName === 'BUTTON' || el.tagName === 'A' || el.tagName === 'INPUT') {
                        issues.push({
                            selector: el.tagName,
                            reason: "Focusable element has aria-hidden='true'"
                        });
                    }
                });
                return issues;
            }
            """
            violations = await page.evaluate(js_code)
            
            for v in violations:
                issues.append(self.create_issue(
                    subcategory="invalid_aria",
                    severity="high",
                    title="ARIA Attribute Violation",
                    description=v["reason"],
                    evidence=v
                ))
                
        return issues
