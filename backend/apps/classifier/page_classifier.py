import re
from typing import Dict, Any, List
from reqon_types.models import PageData

class PageClassifier:
    """
    Classifies pages into types (e.g., 'auth', 'dashboard', 'ecommerce_product', 'article')
    based on URL patterns, DOM structure, and text content.
    """
    
    def __init__(self):
        # We could load a light scikit-learn model here if trained
        pass
        
    def classify(self, page_data: PageData) -> str:
        url = page_data.url.lower()
        dom = page_data.dom_snapshot.lower()
        
        # 1. URL Heuristics
        if any(x in url for x in ['/login', '/signin', '/auth']):
            return "auth_login"
        if any(x in url for x in ['/signup', '/register']):
            return "auth_register"
        if any(x in url for x in ['/dashboard', '/admin']):
            return "dashboard"
        if '/product/' in url or '/item/' in url:
            return "ecommerce_product"
        if '/checkout' in url or '/cart' in url:
            return "ecommerce_checkout"
        if '/blog/' in url or '/article/' in url or '/post/' in url:
            return "content_article"
            
        # 2. DOM Heuristics
        # Check if forms are present
        forms = page_data.forms_found
        if forms:
            for f in forms:
                action = str(f.get("action", "")).lower()
                inputs = f.get("inputs", [])
                input_names = [str(i.get("name", "")).lower() for i in inputs]
                
                if "password" in [str(i.get("type", "")).lower() for i in inputs]:
                    if "current_password" in input_names or action.endswith("login"):
                        return "auth_login"
                    elif "new_password" in input_names or action.endswith("register"):
                        return "auth_register"
                        
        if "add to cart" in dom or "buy now" in dom:
            return "ecommerce_product"
            
        # Default fallback
        return "generic_page"
