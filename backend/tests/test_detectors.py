import pytest
import asyncio
from unittest.mock import MagicMock
from datetime import datetime

from reqon_types.models import PageData
from apps.detector.detectors.accessibility.missing_alt_text import MissingAltTextDetector
from apps.scorer.score_engine import ScoreEngine

@pytest.fixture
def mock_page_data():
    return PageData(
        url="https://example.com",
        title="Test Page",
        http_status=200,
        depth=0,
        dom_snapshot="<html><body><img src='test.jpg' /></body></html>",
        dom_structure={},
        screenshot_bytes=None,
        console_logs=[],
        network_requests=[],
        performance_metrics={},
        links_found=[],
        forms_found=[],
        interactive_elements=[],
        metadata={},
        crawled_at=datetime.utcnow()
    )

@pytest.mark.asyncio
async def test_missing_alt_text_detector(mock_page_data):
    detector = MissingAltTextDetector()
    
    # Mock playwright page evaluation
    mock_page = MagicMock()
    # The evaluation returns a list of dictionaries simulating the JS result
    mock_page.evaluate = MagicMock()
    mock_page.evaluate.return_value = [{"src": "test.jpg", "reason": "missing_attribute"}]
    
    # Since playwright evaluation is async, we need an async magic mock
    async def mock_eval(*args, **kwargs):
        return mock_page.evaluate.return_value

    mock_page.evaluate = mock_eval
    
    issues = await detector.detect(mock_page_data, mock_page)
    
    assert len(issues) == 1
    assert issues[0].subcategory == "missing_attribute"
    assert issues[0].severity == "critical"
    assert issues[0].title == "Missing Alt Attribute"

def test_score_engine(mock_page_data):
    detector = MissingAltTextDetector()
    issue = detector.create_issue(
        subcategory="missing_attribute",
        severity="critical",
        title="Missing Alt Attribute",
        description="Test Issue"
    )
    
    engine = ScoreEngine()
    result = engine.calculate_page_score([issue])
    
    # A single critical issue in accessibility reduces the score exponentially.
    # Severity weight for critical = 15.0, Category weight for a11y = 1.0 => Total Penalty = 15.0
    # Score = 100 * (0.95 ^ 15) ≈ 100 * 0.463 = 46.3
    assert result["overall"] < 50.0
    assert result["categories"]["accessibility"] == 85.0 # 100 - 15
