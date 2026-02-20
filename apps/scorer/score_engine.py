from typing import List, Dict, Any
from reqon_types.models import RawIssue

class ScoreEngine:
    """
    Calculates hygiene scores (0-100) based on detected issues.
    """
    
    # Weight penalties by severity
    SEVERITY_WEIGHTS = {
        "critical": 15.0,
        "high": 8.0,
        "medium": 3.0,
        "low": 1.0,
        "info": 0.0
    }
    
    # Weight multipliers by category
    CATEGORY_WEIGHTS = {
        "security": 1.5,
        "functional": 1.2,
        "performance": 1.0,
        "accessibility": 1.0,
        "ui": 0.8,
        "seo": 0.8,
        "content": 0.5
    }

    def calculate_page_score(self, issues: List[RawIssue]) -> Dict[str, float]:
        """
        Calculate score for a single page.
        Returns overall score and category breakdown.
        """
        details = {cat: 100.0 for cat in self.CATEGORY_WEIGHTS.keys()}
        total_penalty = 0.0
        
        for issue in issues:
            if issue.is_false_positive:
                continue
                
            weight = self.SEVERITY_WEIGHTS.get(issue.severity, 1.0)
            multiplier = self.CATEGORY_WEIGHTS.get(issue.category, 1.0)
            
            penalty = weight * multiplier
            total_penalty += penalty
            
            if issue.category in details:
                details[issue.category] = max(0.0, details[issue.category] - penalty)
                
        # Non-linear decay for overall score to prevent dropping to 0 too fast
        overall_score = 100.0 * (0.95 ** total_penalty)
        if total_penalty == 0:
            overall_score = 100.0
            
        return {
            "overall": max(0.0, min(100.0, overall_score)),
            "categories": details
        }

    def calculate_job_score(self, page_scores: List[Dict[str, float]]) -> Dict[str, float]:
        """
        Aggregate multiple page scores into a single job score.
        """
        if not page_scores:
            return {"overall": 100.0, "categories": {cat: 100.0 for cat in self.CATEGORY_WEIGHTS.keys()}}
            
        total_overall = sum(ps["overall"] for ps in page_scores)
        job_overall = total_overall / len(page_scores)
        
        job_categories = {}
        for cat in self.CATEGORY_WEIGHTS.keys():
            cat_sum = sum(ps["categories"].get(cat, 100.0) for ps in page_scores)
            job_categories[cat] = cat_sum / len(page_scores)
            
        return {
            "overall": job_overall,
            "categories": job_categories
        }
