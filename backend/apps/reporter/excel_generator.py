import io
import pandas as pd
from typing import List, Dict, Any
from reqon_types.models import RawIssue

class ExcelReportGenerator:
    """
    Generates Excel reports for developers and QA using pandas and openpyxl.
    """
    
    def generate(self, job_data: Dict[str, Any], issues: List[RawIssue]) -> bytes:
        # Convert issues to dictionary mapping
        issues_data = []
        for issue in issues:
            issues_data.append({
                "ID": issue.id,
                "Detector": issue.detector_name,
                "Category": issue.category,
                "Subcategory": issue.subcategory,
                "Severity": issue.severity.upper(),
                "Title": issue.title,
                "Description": issue.description,
                "False Positive": issue.is_false_positive,
                "Confidence": issue.confidence_score
            })
            
        df_issues = pd.DataFrame(issues_data)
        
        # Summary Data
        summary_data = {
            "Metric": ["Target URL", "Job ID", "Hygiene Score", "Total Issues"],
            "Value": [job_data.get("target_url"), job_data.get("id"), job_data.get("score"), len(issues)]
        }
        df_summary = pd.DataFrame(summary_data)
        
        buffer = io.BytesIO()
        with pd.ExcelWriter(buffer, engine='openpyxl') as writer:
            df_summary.to_excel(writer, sheet_name='Summary', index=False)
            df_issues.to_excel(writer, sheet_name='All Issues', index=False)
            
            # Pivot table by category
            if not df_issues.empty:
                pivot = pd.pivot_table(df_issues, values='ID', index=['Category'], columns=['Severity'], aggfunc='count', fill_value=0)
                pivot.to_excel(writer, sheet_name='Category Breakdown')
                
        excel_bytes = buffer.getvalue()
        buffer.close()
        return excel_bytes
