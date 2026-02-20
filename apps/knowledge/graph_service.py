from neo4j import AsyncGraphDatabase
from typing import List, Dict, Any
from reqon_types.models import PageData, RawIssue
from reqon_config.settings import settings
from reqon_utils.logger import setup_logger

logger = setup_logger("reqon-knowledge-graph")

class KnowledgeGraphService:
    """
    Manages the Neo4j Knowledge Graph, creating nodes for Domains, Pages,
    Issues, and maintaining relationships (LINKS_TO, HAS_ISSUE).
    """
    
    def __init__(self):
        self._driver = AsyncGraphDatabase.driver(
            settings.NEO4J_URI, 
            auth=(settings.NEO4J_USER, settings.NEO4J_PASSWORD)
        )
        logger.info("Initialized Neo4j driver connection")

    async def close(self):
        await self._driver.close()

    async def init_schema(self):
        """Creates basic constraints in Neo4j."""
        async with self._driver.session() as session:
            try:
                await session.run("CREATE CONSTRAINT IF NOT EXISTS FOR (d:Domain) REQUIRE d.name IS UNIQUE")
                await session.run("CREATE CONSTRAINT IF NOT EXISTS FOR (p:Page) REQUIRE p.url IS UNIQUE")
                await session.run("CREATE CONSTRAINT IF NOT EXISTS FOR (i:Issue) REQUIRE i.id IS UNIQUE")
            except Exception as e:
                logger.error("Failed to initialize Neo4j schema", error=str(e))

    async def add_page(self, job_id: str, page: PageData, page_type: str = "generic_page"):
        """Inserts a Page node and its links."""
        query = """
        MERGE (p:Page {url: $url})
        SET p.title = $title, 
            p.status = $status, 
            p.type = $page_type,
            p.job_id = $job_id
            
        WITH p
        UNWIND $links AS link
        MERGE (target:Page {url: link})
        MERGE (p)-[:LINKS_TO]->(target)
        """
        async with self._driver.session() as session:
            try:
                await session.run(
                    query, 
                    url=page.url, 
                    title=page.title, 
                    status=page.http_status, 
                    page_type=page_type,
                    job_id=job_id,
                    links=page.links_found
                )
            except Exception as e:
                logger.error(f"Failed to ingest page {page.url} to Neo4j", error=str(e))

    async def add_issues(self, page_url: str, issues: List[RawIssue]):
        """Links issues to a Page node."""
        if not issues:
            return
            
        async with self._driver.session() as session:
            for issue in issues:
                if issue.is_false_positive:
                    continue
                    
                query = """
                MATCH (p:Page {url: $url})
                MERGE (i:Issue {
                    detector: $detector,
                    category: $category,
                    title: $title
                })
                SET i.severity = $severity,
                    i.description = $description
                MERGE (p)-[:HAS_ISSUE]->(i)
                """
                try:
                    await session.run(
                        query,
                        url=page_url,
                        detector=issue.detector_name,
                        category=issue.category,
                        title=issue.title,
                        severity=issue.severity,
                        description=issue.description or ""
                    )
                except Exception as e:
                    logger.error(f"Failed to ingest issue to Neo4j for {page_url}", error=str(e))

    async def get_graph_data(self, job_id: str, limit: int = 1000) -> Dict[str, Any]:
        """Retrieves nodes and edges formatted for Cytoscape.js"""
        query = """
        MATCH (p:Page {job_id: $job_id})
        OPTIONAL MATCH (p)-[r:LINKS_TO]->(target:Page)
        OPTIONAL MATCH (p)-[ri:HAS_ISSUE]->(i:Issue)
        RETURN p, r, target, ri, i
        LIMIT $limit
        """
        
        nodes = []
        edges = []
        node_ids = set()
        edge_ids = set()
        
        async with self._driver.session() as session:
            result = await session.run(query, job_id=job_id, limit=limit)
            records = await result.data()
            
            for row in records:
                p = row.get("p")
                if p and p["url"] not in node_ids:
                    nodes.append({"data": {"id": p["url"], "label": p.get("title") or p["url"], "type": "page", "category": p.get("type", "generic")}})
                    node_ids.add(p["url"])
                    
                target = row.get("target")
                r = row.get("r")
                if target and r:
                    if target["url"] not in node_ids:
                        nodes.append({"data": {"id": target["url"], "label": target.get("title") or target["url"], "type": "page"}})
                        node_ids.add(target["url"])
                    edge_id = f'{p["url"]}-links-{target["url"]}'
                    if edge_id not in edge_ids:
                        edges.append({"data": {"id": edge_id, "source": p["url"], "target": target["url"], "type": "LINKS_TO"}})
                        edge_ids.add(edge_id)
                        
                issue = row.get("i")
                ri = row.get("ri")
                if issue and ri:
                    # Fabricate an ID for the issue based on its properties
                    issue_id = f"issue-{issue['detector']}-{issue['title']}"
                    if issue_id not in node_ids:
                        nodes.append({"data": {"id": issue_id, "label": issue["title"], "type": "issue", "severity": issue.get("severity", "info")}})
                        node_ids.add(issue_id)
                    edge_id = f'{p["url"]}-has_issue-{issue_id}'
                    if edge_id not in edge_ids:
                        edges.append({"data": {"id": edge_id, "source": p["url"], "target": issue_id, "type": "HAS_ISSUE"}})
                        edge_ids.add(edge_id)
                        
        return {
            "nodes": nodes,
            "edges": edges
        }
