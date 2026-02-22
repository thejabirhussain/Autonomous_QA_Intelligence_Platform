from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class MetaTagsDetector(BaseDetector):
    name = "meta_tags"
    category = "seo"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                const meta = {
                    title: document.title,
                    description: document.querySelector('meta[name="description"]')?.content,
                    og_title: document.querySelector('meta[property="og:title"]')?.content,
                    canonical: document.querySelector('link[rel="canonical"]')?.href
                };
                return meta;
            }
            """
            meta_inf = await page.evaluate(js_code)
            tag_title = meta_inf.get("title", "")
            description = meta_inf.get("description", "")
            
            if not tag_title:
                issues.append(self.create_issue(
                    subcategory="missing_title",
                    severity="critical",
                    title="Missing Page Title",
                    description="The page is missing a <title> tag."
                ))
            elif len(tag_title) > 60 or len(tag_title) < 30:
                issues.append(self.create_issue(
                    subcategory="bad_title_length",
                    severity="medium",
                    title="Suboptimal Page Title Length",
                    description=f"Title length is {len(tag_title)} characters (Recommended: 30-60).",
                    evidence={"title": tag_title}
                ))
                
            if not description:
                issues.append(self.create_issue(
                    subcategory="missing_meta_description",
                    severity="high",
                    title="Missing Meta Description",
                    description="The page is missing a meta description."
                ))
            elif len(description) > 160:
                issues.append(self.create_issue(
                    subcategory="bad_description_length",
                    severity="medium",
                    title="Meta Description Too Long",
                    description=f"Description length is {len(description)} chars (Recommended: <160).",
                    evidence={"description": description}
                ))
                
        return issues
