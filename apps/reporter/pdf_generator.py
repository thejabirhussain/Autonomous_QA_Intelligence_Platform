import io
from typing import List, Dict, Any
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reqon_types.models import RawIssue

class PDFReportGenerator:
    """
    Generates PDF compliance and defect reports using ReportLab.
    """
    def __init__(self):
        self.styles = getSampleStyleSheet()
        self.styles.add(ParagraphStyle(name='CustomTitle', parent=self.styles['Heading1'], fontSize=24, spaceAfter=20))

    def generate(self, job_data: Dict[str, Any], issues: List[RawIssue]) -> bytes:
        buffer = io.BytesIO()
        doc = SimpleDocTemplate(buffer, pagesize=letter)
        
        elements = []
        
        # Title
        elements.append(Paragraph(f"ReQon Intelligence Platform Report", self.styles['CustomTitle']))
        elements.append(Paragraph(f"Job ID: {job_data.get('id', 'N/A')}", self.styles['Normal']))
        elements.append(Paragraph(f"Target URL: {job_data.get('target_url', 'N/A')}", self.styles['Normal']))
        elements.append(Paragraph(f"Overall Hygiene Score: {job_data.get('score', 'N/A')}", self.styles['Heading2']))
        elements.append(Spacer(1, 20))
        
        # Issues Summary Table
        issues_summary = [["Severity", "Count"]]
        counts = {"critical": 0, "high": 0, "medium": 0, "low": 0, "info": 0}
        for issue in issues:
            if not issue.is_false_positive:
                counts[issue.severity] = counts.get(issue.severity, 0) + 1
                
        for sev, count in counts.items():
            issues_summary.append([sev.upper(), count])
            
        t = Table(issues_summary, colWidths=[100, 100])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
            ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
            ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
            ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
            ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
            ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
            ('GRID', (0, 0), (-1, -1), 1, colors.black)
        ]))
        elements.append(t)
        elements.append(Spacer(1, 20))
        
        # Top Issues List
        elements.append(Paragraph("Top Critical & High Issues", self.styles['Heading2']))
        for index, issue in enumerate([i for i in issues if i.severity in ('critical', 'high')][:50]):
            elements.append(Paragraph(f"{index+1}. {issue.title} ({issue.category})", self.styles['Heading3']))
            elements.append(Paragraph(f"{issue.description}", self.styles['Normal']))
            elements.append(Spacer(1, 10))
            
        doc.build(elements)
        pdf_bytes = buffer.getvalue()
        buffer.close()
        
        return pdf_bytes
