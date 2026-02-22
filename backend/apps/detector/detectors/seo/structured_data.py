from typing import List, Any
import json
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class StructuredDataDetector(BaseDetector):
    name = "structured_data"
    category = "seo"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
                return scripts.map(s => s.innerText);
            }
            """
            json_lds = await page.evaluate(js_code)
            
            for text in json_lds:
                try:
                    data = json.loads(text)
                    if "@type" not in data:
                        issues.append(self.create_issue(
                            subcategory="missing_schema_type",
                            severity="medium",
                            title="Missing Schema Type",
                            description="Structured data JSON-LD is missing '@type'.",
                            evidence={"json": text[:100]}
                        ))
                except json.JSONDecodeError:
                    issues.append(self.create_issue(
                        subcategory="invalid_json_ld",
                        severity="high",
                        title="Invalid JSON-LD Syntax",
                        description="Structured data failed to parse as valid JSON.",
                        evidence={"json": text[:100]}
                    ))
                    
        return issues
