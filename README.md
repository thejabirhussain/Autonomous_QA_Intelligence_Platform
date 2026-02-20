# Autonomous QA Intelligence Platform (ReQon)

![ReQon Intelligence Platform](https://img.shields.io/badge/Status-Production%20Ready-success)
![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014-black)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688)
![Neo4j](https://img.shields.io/badge/GraphDB-Neo4j-4180C5)

An AI-powered, autonomous Quality Assurance (QA) engine. ReQon acts as a self-driving crawler traversing web applications, executing 20+ specialized detectors (Functional, UI, Performance, Accessibility, SEO, and Security), eliminating false positives with LLMs, scoring application hygiene, and building a searchable architectural Knowledge Graph of defects.

---

## 🏗 Architecture Explanation
ReQon is built on a modern, decoupled microservices architecture designed for extreme scalability and AI integration.

- **Frontend (Next.js 14 App Router)**: Provides an interactive dashboard, live-updating scan logs, Recharts data analytics, and Cytoscape.js interactive Knowledge Graph rendering.
- **Backend API (FastAPI)**: REST interface handling user authentication (JWT), scan job configurations, and historical score aggregations.
- **Crawler Engine (Playwright + Celery)**: Asynchronous workers that deeply navigate sites, handle auth bypass, record network/console anomalies, and capture DOM structure snapshots.
- **Defect Detectors**: 24 modular classes analyzing Playwright page data to flag issues (e.g. Broken Links, Missing Alt Text, Insecure Headers, Visual Overlap).
- **Intelligence Layer (Google Gemini)**: Automatically analyzes defect reports mapping against context to eliminate false positives and propose code fixes.
- **Knowledge Graph (Neo4j)**: Correlates URLs, Paths, Features, and Defects into a relational Graph.
- **Data Stores**: PostgreSQL (Relational state and scoring), Redis (Celery broker and caching), Elasticsearch (Full-text issue search - *Available capability*), MinIO (Object storage for DOM/Screenshots - *Available capability*).

---

## 📁 Folder Structure
```text
reqon-platform/
├── apps/
│   ├── api/          # FastAPI backend serving routes
│   ├── classifier/   # Page heuristics & LLM False Positive Enrichment
│   ├── crawler/      # Playwright interactions & Celery task management
│   ├── dashboard/    # Next.js 14 Web Application
│   ├── detector/     # 24 custom defect detectors (A11y, UI, Security, etc.)
│   ├── knowledge/    # Neo4j Graph ingestion service
│   ├── reporter/     # ReportLab (PDF) and OpenPyXL (Excel) exporters
│   └── scorer/       # Exponential decay hygiene scoring engine
├── infra/            # Docker, Nginx, Prometheus setup
├── packages/         # Shared configs, Pydantic types, and custom utilities
├── tests/            # Pytest test cases validating detectors
├── .github/workflows # CI/CD for GitHub actions
├── docker-compose.yml 
└── requirements.txt  # Consolidated dependencies for the Python Monorepo
```

---

## 🚀 Setup Instructions (Docker - Recommended)

The easiest way to run ReQon in a production-like environment is via Docker Compose.

1. **Clone the repository**
   ```bash
   git clone https://github.com/thejabirhussain/Autonomous_QA_Intelligence_Platform.git
   cd reqon-platform
   ```
2. **Setup Environment Variables**
   ```bash
   cp .env.example .env
   # Open .env and insert your Google Gemini API Key and other secrets
   ```
3. **Launch the Infrastructure**
   ```bash
   docker-compose up --build -d
   ```
4. **Access the Services**
   - **Dashboard UI**: [http://localhost:3000](http://localhost:3000)
   - **Backend API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)
   - **Neo4j Browser**: [http://localhost:7474](http://localhost:7474) (neo4j / reqon123)

---

## 💻 Setup Instructions (Local / Development without Docker)

To develop locally without running full containers:

1. **Install Prerequisites**
   - Python 3.11+
   - Node.js 20+
   - A local running instance of PostgreSQL, Redis, and Neo4j

2. **Backend Setup**
   ```bash
   # Install unified python requirements
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   
   # Install Playwright browsers matching the engine
   playwright install --with-deps chromium
   ```

3. **Database Migrations**
   ```bash
   alembic upgrade head
   ```

4. **Run the Services (In separate terminals)**
   ```bash
   # 1. FastAPI Server
   uvicorn apps.api.main:app --reload --port 8000
   
   # 2. Celery Worker (Crawler)
   celery -A apps.crawler.tasks worker --loglevel=info
   
   # 3. Next.js Dashboard
   cd apps/dashboard
   npm install
   npm run dev
   ```

---

## 🧪 Testing the System

1. **Unit Testing**
   Run the pytest suite to validate the Defect Detectors and Scoring algorithms.
   ```bash
   pytest tests/ -v
   ```

2. **End-to-End System Testing**
   - Open the web dashboard at `http://localhost:3000`.
   - Click **Launch Scan** on the homepage to simulate a Live crawler inspection block.
   - You will see live "WebSocket" style console logs indicating paths navigated and defects collected.
   - Navigate to the **Knowledge Graph** tab to interact with the visual map of defects.
   - Navigate to the **Issues & Analytics** tab to view pie charts and filter issues.

---

## 📖 API Documentation

The platform uses FastAPI which auto-generates Swagger documentation. After starting the server (either locally or via Docker), navigate to:
**[http://localhost:8000/docs](http://localhost:8000/docs)**

Core Endpoints:
- `POST /api/v1/auth/login` (Obtain JWT)
- `POST /api/v1/scans` (Submit a new Target URL for Autonomous QA)
- `GET /api/v1/scans/{job_id}/results` (Fetch score, analytics, and issue breakdowns)
- `GET /api/v1/reports/pdf` (Generate PDF compliant export)

---

## 🔧 Deployment Guidance

For staging and production deployments:
1. Ensure `ENVIRONMENT=production` and `DEBUG=false` in `.env`.
2. Ensure Docker containers are bound to appropriate custom domains via the provided `Nginx` reverse proxy config.
3. Keep the `neo4j_data` and `postgres_data` Docker volumes backed up manually or via block storage.
4. Scale the Celery `worker` and `crawler` containers horizontally via Docker Swarm or Kubernetes (`kubectl scale`) to process massive catalogs of URLs concurrently.
