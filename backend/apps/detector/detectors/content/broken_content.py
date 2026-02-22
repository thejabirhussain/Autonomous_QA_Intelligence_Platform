import re
from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class BrokenContentDetector(BaseDetector):
    name = "broken_content"
    category = "content"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        dom = page_data.dom_snapshot
        
        # Heuristics for broken content
        if "lorem ipsum" in dom.lower():
            issues.append(self.create_issue(
                subcategory="placeholder_text",
                severity="medium",
                title="Placeholder Text Detected",
                description="The page contains 'Lorem ipsum' placeholder text."
            ))
            
        # Look for unresolved template variables (e.g. {{ name }}, [[ variable ]])
        template_vars = re.findall(r'(\{\{\s*[a-zA-Z0-9_]+\s*\}\}|\[\[\s*[a-zA-Z0-9_]+\s*\]\])', dom)
        if template_vars:
            issues.append(self.create_issue(
                subcategory="template_variable",
                severity="high",
                title="Unresolved Template Variable",
                description=f"Raw template variable displayed on page: {template_vars[0]}.",
                evidence={"variable": template_vars[0]}
            ))
            
        return issues
