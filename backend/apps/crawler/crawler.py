import asyncio
import hashlib
from datetime import datetime
from typing import AsyncGenerator, Dict, Any, List, Tuple
from urllib.parse import urlparse, urljoin
from playwright.async_api import async_playwright, Browser, BrowserContext, Page

from reqon_types.models import CrawlerConfig, AuthConfig, PageData
from reqon_utils.logger import setup_logger

logger = setup_logger("reqon-crawler")

class CrawlerEvent:
    def __init__(self, event_type: str, data: Dict[str, Any]):
        self.event_type = event_type
        self.data = data
        self.timestamp = datetime.utcnow().isoformat()

class AutonomousCrawler:
    def __init__(self):
        self.playwright = None
        self.browser = None
        self.context = None
        self.visited_urls = set()
        self.discovered_urls = set()

    async def start(self, config: CrawlerConfig) -> AsyncGenerator[CrawlerEvent, None]:
        logger.info("Starting crawler", target_url=config.target_url)
        
        self.playwright = await async_playwright().start()
        self.browser, self.context = await self._setup_browser(config)
        
        try:
            # Yield scan started
            yield CrawlerEvent("scan_started", {"target_url": config.target_url, "max_pages": config.max_pages})
            
            queue = [(config.target_url, 0, None)] # url, depth, parent
            
            while queue and len(self.visited_urls) < config.max_pages:
                current_batch = queue[:config.concurrent_pages]
                queue = queue[config.concurrent_pages:]
                
                tasks = []
                for url, depth, parent in current_batch:
                    if self._is_duplicate(self._hash_url(url)):
                        continue
                    
                    if depth > config.max_depth:
                        continue
                        
                    yield CrawlerEvent("page_discovered", {"url": url})
                    tasks.append(self._process_url(url, depth, parent, config))
                    
                results = await asyncio.gather(*tasks, return_exceptions=True)
                
                for res in results:
                    if isinstance(res, Exception):
                        logger.error("Error processing page", error=str(res))
                        continue
                        
                    page_data, new_links = res
                    self.visited_urls.add(page_data.url_hash)
                    
                    yield CrawlerEvent("page_crawled", {
                        "url": page_data.url,
                        "depth": page_data.depth,
                        "title": page_data.title,
                        "http_status": page_data.http_status,
                        "page_data": page_data
                    })
                    
                    # Add new links to queue
                    for link in new_links:
                        link_hash = self._hash_url(link)
                        if self._should_crawl_url(link, config.target_url, config) and link_hash not in self.discovered_urls:
                            self.discovered_urls.add(link_hash)
                            queue.append((link, depth + 1, page_data.url))
                            
        finally:
            if self.context:
                await self.context.close()
            if self.browser:
                await self.browser.close()
            if self.playwright:
                await self.playwright.stop()
                
            yield CrawlerEvent("scan_completed", {
                "total_pages_crawled": len(self.visited_urls),
                "total_pages_discovered": len(self.discovered_urls)
            })

    async def _setup_browser(self, config: CrawlerConfig) -> Tuple[Browser, BrowserContext]:
        browser = await self.playwright.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={'width': config.viewport_width, 'height': config.viewport_height},
            user_agent=config.user_agent,
            extra_http_headers=config.extra_headers
        )
        return browser, context

    async def _process_url(self, url: str, depth: int, parent_url: str | None, config: CrawlerConfig) -> Tuple[PageData, List[str]]:
        page = await self.context.new_page()
        network_requests = []
        console_logs = []
        
        # Setup listeners
        page.on("request", lambda r: network_requests.append({"url": r.url, "method": r.method}))
        page.on("response", lambda r: network_requests[-1].update({"status": r.status}) if network_requests else None)
        page.on("console", lambda msg: console_logs.append({"type": msg.type, "text": msg.text}))
        
        try:
            response = await page.goto(url, wait_until="networkidle", timeout=config.page_timeout)
            await page.wait_for_timeout(config.wait_after_load)
            
            # Extract data
            dom = await page.content()
            title = await page.title()
            status = response.status if response else 0
            
            # Auth handler bypass for now
            
            dom_structure = await self._extract_dom_structure(page)
            links = await self._extract_links(page)
            forms = await self._extract_forms(page)
            performance = await self._capture_performance_metrics(page)
            
            screenshot_bytes = None
            if config.capture_screenshots:
                screenshot_bytes = await page.screenshot(full_page=True)
                
            page_data = PageData(
                url=url,
                url_hash=self._hash_url(url),
                title=title,
                http_status=status,
                depth=depth,
                parent_url=parent_url,
                dom_snapshot=dom,
                dom_structure=dom_structure,
                screenshot_bytes=screenshot_bytes,
                console_logs=console_logs,
                network_requests=network_requests,
                performance_metrics=performance,
                links_found=links,
                forms_found=forms,
                interactive_elements=[],
                metadata={},
                crawled_at=datetime.utcnow()
            )
            
            return page_data, links
            
        finally:
            await page.close()

    async def _extract_dom_structure(self, page: Page) -> Dict[str, Any]:
        js_code = """
        () => {
            const getTexts = (selector) => Array.from(document.querySelectorAll(selector)).map(e => e.innerText.trim());
            const getAttrs = (selector, attr) => Array.from(document.querySelectorAll(selector)).map(e => e.getAttribute(attr));
            
            return {
                "headings": getTexts('h1, h2, h3, h4, h5, h6').slice(0, 50),
                "buttons": getTexts('button').slice(0, 50),
                "images": getAttrs('img', 'src').slice(0, 50),
                "inputs": getAttrs('input', 'type').reduce((acc, type) => {
                    acc[type] = (acc[type] || 0) + 1;
                    return acc;
                }, {}),
                "total_elements": document.querySelectorAll('*').length,
                "visible_text_length": document.body.innerText.length,
                "has_form": document.querySelectorAll('form').length > 0,
                "has_table": document.querySelectorAll('table').length > 0,
                "has_nav": document.querySelectorAll('nav').length > 0
            };
        }
        """
        return await page.evaluate(js_code)

    async def _extract_links(self, page: Page) -> List[str]:
        links = await page.evaluate("Array.from(document.querySelectorAll('a')).map(a => a.href)")
        return list(set([l for l in links if l.startswith('http')]))

    async def _extract_forms(self, page: Page) -> List[Dict[str, Any]]:
        js_code = """
        () => {
            return Array.from(document.querySelectorAll('form')).map(f => {
                const inputs = Array.from(f.querySelectorAll('input, select, textarea')).map(i => {
                    return {
                        name: i.name || '',
                        type: i.type || i.tagName.toLowerCase(),
                        required: i.required
                    };
                });
                return {
                    id: f.id || '',
                    action: f.action || '',
                    method: f.method || 'get',
                    inputs: inputs
                };
            });
        }
        """
        return await page.evaluate(js_code)

    async def _capture_performance_metrics(self, page: Page) -> Dict[str, Any]:
        js_code = """
        () => {
            const timing = window.performance.timing;
            return {
                load_time: timing.loadEventEnd - timing.navigationStart,
                dom_ready: timing.domContentLoadedEventEnd - timing.navigationStart,
                ttfb: timing.responseStart - timing.navigationStart,
            };
        }
        """
        try:
            return await page.evaluate(js_code)
        except Exception:
            return {}

    def _hash_url(self, url: str) -> str:
        parsed = urlparse(url)
        normalized = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
        if parsed.query:
            normalized += f"?{parsed.query}"
        normalized = normalized.rstrip("/")
        return hashlib.sha256(normalized.encode()).hexdigest()

    def _is_duplicate(self, url_hash: str) -> bool:
        return url_hash in self.visited_urls

    def _should_crawl_url(self, url: str, base_url: str, config: CrawlerConfig) -> bool:
        try:
            parsed_url = urlparse(url)
            parsed_base = urlparse(base_url)
            # Only stay on same domain
            if parsed_url.netloc != parsed_base.netloc:
                return False
            return True
        except:
            return False
