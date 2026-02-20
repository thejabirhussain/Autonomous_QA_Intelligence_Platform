from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class HeadingStructureDetector(BaseDetector):
    name = "heading_structure"
    category = "accessibility"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        headings = page_data.dom_structure.get("headings", [])
        
        # Check if H1 is missing entirely
        # Heuristics on DOM headings array extracted from Playwright:
        has_h1 = any(True for h in headings if "h1" in str(h).lower())  # Note: `h` needs to contain tag name.
        
        # In actual implementation: headings = [{"level": 1, "text": "..."}, ...]
        # Let's assume `page_data` structure was updated to match config:
        if page:
            js_code = """
            () => {
                const issues = [];
                const h1s = document.querySelectorAll('h1');
                if (h1s.length === 0) {
                    issues.push({reason: "missing_h1", severity: "high"});
                } else if (h1s.length > 1) {
                    issues.push({reason: "multiple_h1", severity: "medium"});
                }
                
                // Skipped levels check
                let prevLevel = 0;
                document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
                    const level = parseInt(h.tagName[1]);
                    if (prevLevel !== 0 && level > prevLevel + 1) {
                        issues.push({
                            reason: "skipped_level", 
                            severity: "medium", 
                            text: h.innerText.substring(0,30),
                            level: level,
                            skipped_from: prevLevel
                        });
                    }
                    prevLevel = level;
                });
                return issues;
            }
            """
            violations = await page.evaluate(js_code)
            
            for v in violations:
                title_map = {
                    "missing_h1": "Missing H1 Heading",
                    "multiple_h1": "Multiple H1 Headings Detected",
                    "skipped_level": "Skipped Heading Level"
                }
                issues.append(self.create_issue(
                    subcategory=v["reason"],
                    severity=v["severity"],
                    title=title_map.get(v["reason"], "Heading Structure Issue"),
                    description=f"Heading logic violation: {v.get('reason')}",
                    evidence=v
                ))
                
        return issues
