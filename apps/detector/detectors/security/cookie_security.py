from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class CookieSecurityDetector(BaseDetector):
    name = "cookie_security"
    category = "security"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                // Return cookies visible via JS (which means they are NOT HttpOnly)
                return document.cookie;
            }
            """
            cookies_str = await page.evaluate(js_code)
            
            # Simple heuristic: if we see 'session' or 'token' in document.cookie, it's missing HttpOnly
            if "session" in cookies_str.lower() or "token" in cookies_str.lower():
                issues.append(self.create_issue(
                    subcategory="missing_httponly",
                    severity="high",
                    title="Auth Cookie Missing HttpOnly",
                    description="A potentially sensitive cookie is accessible via JavaScript.",
                    evidence={"cookie_names_sample": cookies_str[:50]}
                ))
                
        return issues
