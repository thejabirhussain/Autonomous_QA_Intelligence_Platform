import google.generativeai as genai
from typing import List
from reqon_config.settings import settings
from reqon_types.models import RawIssue
from reqon_utils.logger import setup_logger

logger = setup_logger("reqon-llm-enricher")

class LLMIssueEnricher:
    """
    Uses Gemini API to process raw issues, filter false positives, 
    generate actionable fix recommendations, and group related issues.
    """
    def __init__(self):
        if settings.GEMINI_API_KEY:
            genai.configure(api_key=settings.GEMINI_API_KEY)
            self.model = genai.GenerativeModel('gemini-1.5-pro-latest')
        else:
            self.model = None
            logger.warning("GEMINI_API_KEY not set. Falling back to raw logic.")

    async def enrich_issues(self, issues: List[RawIssue]) -> List[RawIssue]:
        if not self.model or not issues:
            return issues
            
        # Due to context size, we'll batch a few core issues at a time or process individually.
        # This is a simplified implementation for processing the most critical issues via LLM.
        
        enriched_issues = []
        for issue in issues:
            if issue.severity in ("critical", "high") and issue.description:
                enriched = await self._query_llm_for_issue(issue)
                enriched_issues.append(enriched)
            else:
                enriched_issues.append(issue)
                
        return enriched_issues
        
    async def _query_llm_for_issue(self, issue: RawIssue) -> RawIssue:
        prompt = f"""
        Analyze the following QA defect report.
        Detector: {issue.detector_name}
        Title: {issue.title}
        Description: {issue.description}
        Evidence: {issue.evidence}
        
        Task 1: Is this likely a false positive? (Reply YES or NO)
        Task 2: Provide a concise (1-2 lines) actionable fix recommendation for a developer.
        
        Output format:
        False Positive: YES/NO
        Recommendation: <text>
        """
        
        try:
            # We use synchronous generate_content wrapped in async context if possible.
            # Assuming basic synchronous block inside an executor or fast enough network response
            import asyncio
            loop = asyncio.get_event_loop()
            response = await loop.run_in_executor(None, self.model.generate_content, prompt)
            
            text = response.text
            if "False Positive: YES" in text:
                issue.is_false_positive = True
                
            # Naive parsing for recommendation
            lines = text.split('\n')
            for line in lines:
                if line.startswith("Recommendation:"):
                    issue.description = issue.description + " | Fix: " + line.replace("Recommendation:", "").strip()
                    break
        except Exception as e:
            logger.error("Failed to enrich issue with Gemini", error=str(e))
            
        return issue
