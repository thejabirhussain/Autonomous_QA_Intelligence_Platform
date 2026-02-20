from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class InvisibleControlsDetector(BaseDetector):
    name = "invisible_controls"
    category = "ui"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                const issues = [];
                const buttons = document.querySelectorAll('button, a, input[type="submit"]');
                buttons.forEach(b => {
                    const style = window.getComputedStyle(b);
                    if (style.opacity === "0" || style.visibility === "hidden") {
                        issues.push({
                            selector: b.tagName,
                            reason: "Control is visually hidden but focusable."
                        });
                    }
                });
                return issues;
            }
            """
            invisible_comps = await page.evaluate(js_code)
            for comp in invisible_comps:
                issues.append(self.create_issue(
                    subcategory="hidden_control",
                    severity="high",
                    title="Invisible Interactive Element",
                    description=comp["reason"],
                    element_selector=comp["selector"],
                ))
                
        return issues
