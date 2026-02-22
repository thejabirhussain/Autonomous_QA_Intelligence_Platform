from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class FormValidationDetector(BaseDetector):
    name = "form_validation"
    category = "functional"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        for form in page_data.forms_found:
            for inp in form.get("inputs", []):
                if inp.get("required") and not inp.get("name"):
                    issues.append(self.create_issue(
                        subcategory="missing_form_name",
                        severity="medium",
                        title="Form Input Missing Name Attribute",
                        description=f"A required input of type '{inp.get('type')}' is missing a name attribute.",
                        evidence={"form_id": form.get("id"), "input_type": inp.get("type")}
                    ))
                    
        return issues
