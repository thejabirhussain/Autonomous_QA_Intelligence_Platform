import pkgutil
import inspect
from typing import List, Dict, Type

from apps.detector.detectors.base import BaseDetector
from apps.detector.detectors import functional, ui, performance, accessibility, seo, security, content
from reqon_types.models import PageData, RawIssue

class DefectDetectionEngine:
    def __init__(self):
        self.detectors: List[BaseDetector] = self._load_detectors()
        
    def _load_detectors(self) -> List[BaseDetector]:
        detectors = []
        modules = [functional, ui, performance, accessibility, seo, security, content]
        
        for pkg in modules:
            for _, name, ispkg in pkgutil.iter_modules(pkg.__path__):
                if not ispkg:
                    module = __import__(f"{pkg.__name__}.{name}", fromlist=['*'])
                    for obj_name, obj in inspect.getmembers(module):
                        if inspect.isclass(obj) and issubclass(obj, BaseDetector) and obj is not BaseDetector:
                            detectors.append(obj())
        return detectors

    async def run_all(self, page_data: PageData, page=None) -> List[RawIssue]:
        issues = []
        for detector in self.detectors:
            try:
                new_issues = await detector.detect(page_data, page)
                issues.extend(new_issues)
            except Exception as e:
                import logging
                logging.error(f"Detector {detector.name} failed: {e}")
        return issues
