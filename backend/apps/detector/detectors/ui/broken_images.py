from typing import List, Any
from reqon_types.models import PageData, RawIssue
from ..base import BaseDetector

class BrokenImagesDetector(BaseDetector):
    name = "broken_images"
    category = "ui"
    
    async def detect(self, page_data: PageData, page: Any | None) -> List[RawIssue]:
        issues = []
        
        if page:
            js_code = """
            () => {
                const issues = [];
                document.querySelectorAll('img').forEach(img => {
                    if (img.complete && img.naturalWidth === 0 && img.src && !img.src.startsWith('data:')) {
                        // Ignore tiny tracking pixels
                        if (img.getAttribute('width') === '1' || img.getAttribute('height') === '1') return;
                        issues.push({src: img.src});
                    }
                });
                return issues;
            }
            """
            broken = await page.evaluate(js_code)
            
            for b in broken:
                issues.append(self.create_issue(
                    subcategory="broken_image",
                    severity="medium",
                    title="Broken Image Link",
                    description="An image failed to load or has 0x0 dimensions.",
                    evidence=b
                ))
                
        return issues
