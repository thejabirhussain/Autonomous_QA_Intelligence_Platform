from abc import ABC, abstractmethod
from typing import List, Optional, Any
import uuid

from reqon_types.models import PageData, RawIssue

class BaseDetector(ABC):
    name: str
    category: str
    
    @abstractmethod
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        pass
    
    def create_issue(
        self,
        subcategory: str,
        severity: str,
        title: str,
        description: Optional[str] = None,
        element_selector: Optional[str] = None,
        element_html: Optional[str] = None,
        evidence: dict = None,
        confidence_score: float = 1.0
    ) -> RawIssue:
        return RawIssue(
            detector_name=self.name,
            category=self.category,
            subcategory=subcategory,
            severity=severity,
            title=title,
            description=description,
            element_selector=element_selector,
            element_html=element_html,
            evidence=evidence or {},
            is_false_positive=False,
            confidence_score=confidence_score
        )
