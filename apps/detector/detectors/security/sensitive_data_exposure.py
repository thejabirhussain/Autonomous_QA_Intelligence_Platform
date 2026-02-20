import re
from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class SensitiveDataDetector(BaseDetector):
    name = "sensitive_data_exposure"
    category = "security"
    
    PATTERNS = {
        "aws_key": r"AKIA[0-9A-Z]{16}",
        "github_token": r"ghp_[0-9a-zA-Z]{36}",
        "ssn": r"\b\d{3}-\d{2}-\d{4}\b",
        "credit_card": r"\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})\b",
        "private_ip": r"\b(?:10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})\b"
        # In a real tool we would have much more robust patterns
    }
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        # Check DOM snapshot for naive occurrences
        dom = page_data.dom_snapshot
        
        for key, pattern in self.PATTERNS.items():
            matches = re.finditer(pattern, dom)
            for m in matches:
                issues.append(self.create_issue(
                    subcategory="exposed_" + key,
                    severity="critical" if key in ["aws_key", "github_token"] else "high",
                    title=f"Sensitive Data Exposed: {key}",
                    description=f"Possible sensitive {key} found in page source.",
                    evidence={"match_snippet": "***REDACTED***"}
                ))
                # Break to avoid exploding report with 100 SSNs on a test page
                break
                
        return issues
