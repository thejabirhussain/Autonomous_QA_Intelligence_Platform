from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class JavaScriptErrorDetector(BaseDetector):
    name = "javascript_errors"
    category = "functional"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        for log in page_data.console_logs:
            if log.get("type") == "error":
                text = log.get("text", "")
                
                # Ignore common benign errors
                if "cast_sender.js" in text or "favicon" in text or "extension" in text or "the server responded with a status of 404" in text:
                    continue
                
                severity = "critical" if "TypeError" in text or "ReferenceError" in text else "medium"
                
                issues.append(self.create_issue(
                    subcategory="console_error",
                    severity=severity,
                    title="JavaScript Error on Page",
                    description=f"Console error detected: {text[:200]}...",
                    evidence={"error_message": text}
                ))
                
        return issues
