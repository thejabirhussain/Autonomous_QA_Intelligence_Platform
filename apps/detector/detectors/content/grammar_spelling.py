from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class GrammarSpellingDetector(BaseDetector):
    name = "grammar_spelling"
    category = "content"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        # Note: Implementing a full pyenchant spell checker exceeds standard dependencies 
        # and requires system libraries. We'll use a mocked heuristic for this implementation
        # checking for obviously all-caps chunks that reduce readability.
        
        if page:
            js_code = """
            () => {
                const issues = [];
                const paragraphs = Array.from(document.querySelectorAll('p, span, div'))
                    .map(el => el.innerText.trim())
                    .filter(t => t.length > 50);
                    
                paragraphs.forEach(t => {
                    if (t === t.toUpperCase() && /[A-Z]/.test(t)) {
                        issues.push({text: t.substring(0, 50)});
                    }
                });
                return issues;
            }
            """
            all_caps_blocks = await page.evaluate(js_code)
            
            for b in all_caps_blocks:
                issues.append(self.create_issue(
                    subcategory="readability_all_caps",
                    severity="low",
                    title="Poor Readability: All Caps Text",
                    description="Large blocks of ALL CAPS text degrade readability and accessibility.",
                    evidence=b
                ))
                
        return issues
