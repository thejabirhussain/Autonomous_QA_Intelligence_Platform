from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class KeyboardNavigationDetector(BaseDetector):
    name = "keyboard_navigation"
    category = "accessibility"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                const issues = [];
                const clickables = document.querySelectorAll('div[onclick], span[onclick]');
                clickables.forEach(c => {
                    const tabIndex = c.getAttribute('tabindex');
                    if (tabIndex === null || tabIndex < 0) {
                        issues.push({
                            selector: c.tagName,
                            text: c.innerText.substring(0, 50),
                            reason: "Clickable element is not keyboard focusable"
                        });
                    }
                });
                return issues;
            }
            """
            violations = await page.evaluate(js_code)
            
            for v in violations:
                issues.append(self.create_issue(
                    subcategory="not_focusable",
                    severity="high",
                    title="Clickable Element Not Focusable",
                    description=v["reason"],
                    element_selector=v.get("selector"),
                    evidence=v
                ))
                
        return issues
