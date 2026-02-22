# Autonomous QA Intelligence Platform (ReQon)

![ReQon Intelligence Platform](https://img.shields.io/badge/Status-Production%20Ready-success)
![Vite React](https://img.shields.io/badge/Frontend-Vite%20React-blue)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688)
![Neo4j](https://img.shields.io/badge/GraphDB-Neo4j-4180C5)

An AI-powered, autonomous Quality Assurance (QA) engine. ReQon acts as a self-driving crawler traversing web applications, executing 20+ specialized detectors (Functional, UI, Performance, Accessibility, SEO, and Security), eliminating false positives with LLMs, scoring application hygiene, and building a searchable architectural Knowledge Graph of defects.

---

## 🏗 Architecture Explanation
ReQon is built on a modern, decoupled microservices architecture designed for extreme scalability and AI integration. The repository is split cleanly into `frontend` and `backend`.

- **Frontend (Vite + React)**: A lightning-fast Single Page Application (SPA) providing an interactive dashboard, live-updating scan logs via WebSockets, Recharts data analytics, and Cytoscape.js interactive Knowledge Graph rendering.
- **Backend API (FastAPI)**: REST interface handling user authentication (JWT), scan job configurations, and historical score aggregations.
- **Crawler Engine (Playwright + Celery)**: Asynchronous workers that deeply navigate sites, handle auth bypass, record network/console anomalies, and capture DOM structure snapshots.
- **Defect Detectors**: 24 modular classes analyzing Playwright page data to flag issues (e.g. Broken Links, Missing Alt Text, Insecure Headers, Visual Overlap).
- **Knowledge Graph (Neo4j)**: Correlates URLs, Paths, Features, and Defects into a relational Graph to visualize the architecture and blast radius of bugs.
- **Data Stores**: PostgreSQL (Relational state and scoring), Redis (Celery broker and WebSocket PubSub cache).

---

## 📁 Folder Structure
The application has been refactored into a clear separation of concerns:

```text
reqon-platform/
├── frontend/             # Vite + React Interface
│   ├── src/
│   │   ├── pages/        # React Router Pages (Home, LiveScan, Graph, Issues)
│   │   └── App.tsx       # Main Layout & Global Routing
│   ├── tailwind.config.js
│   └── package.json
└── backend/              # Python Backend Monolith & Services
    ├── apps/
    │   ├── api/          # FastAPI backend serving routes
    │   ├── crawler/      # Playwright interactions & Celery task management
    │   └── knowledge/    # Neo4j Graph ingestion service
    ├── infra/            # Docker, Nginx, Prometheus setup
    ├── packages/         # Shared configs, Pydantic types, and custom utilities
    ├── tests/            # Pytest test cases validating detectors
    ├── docker-compose.yml 
    └── requirements.txt  # Consolidated dependencies for the Python Backend
```

---

## 🚀 Setup Instructions (Docker - Recommended)

The easiest way to run the entire ReQon suite in an isolated environment.

1. **Clone the repository**
   ```bash
   git clone https://github.com/thejabirhussain/Autonomous_QA_Intelligence_Platform.git
   cd reqon-platform
   ```
2. **Setup Environment Variables**
   ```bash
   cd backend
   cp .env.example .env
   # Open .env and insert your configuration if needed
   ```
3. **Launch the Infrastructure**
   ```bash
   docker-compose up --build -d
   ```
   *Note: This will spin up Postgres, Redis, Neo4j, FastAPI, the Celery Crawler, and the Frontend service.*
   
4. **Access the Services**
   - **Dashboard UI**: [http://localhost:3000](http://localhost:3000)
   - **Backend API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)
   - **Neo4j Browser**: [http://localhost:7474](http://localhost:7474) (neo4j / reqon123)

---

## 💻 Setup Instructions (Local / Development without Docker)

To run the application natively for development and debugging:

1. **Install Prerequisites**
   - Python 3.11+
   - Node.js 20+
   - A local running instance of PostgreSQL, Redis, and Neo4j (Can be launched individually via `docker-compose up postgres redis neo4j -d` from the `backend/` folder).

2. **Backend Setup**
   ```bash
   cd backend
   # Install unified python requirements
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   
   # Install Playwright browsers matching the engine
   playwright install --with-deps chromium
   ```

3. **Database Migrations**
   ```bash
   # Make sure DBs are running and .env is populated with DB credentials
   alembic upgrade head
   ```

4. **Run the Services (In separate terminals)**
   ```bash
   # Terminal 1: FastAPI Server
   cd backend
   source venv/bin/activate
   export PYTHONPATH=$PYTHONPATH:$(pwd):$(pwd)/packages/shared-config:$(pwd)/packages/shared-types:$(pwd)/packages/shared-utils
   uvicorn apps.api.main:app --reload --port 8000
   
   # Terminal 2: Celery Worker (Crawler)
   cd backend
   source venv/bin/activate
   export PYTHONPATH=$PYTHONPATH:$(pwd):$(pwd)/packages/shared-config:$(pwd)/packages/shared-types:$(pwd)/packages/shared-utils
   celery -A apps.crawler.tasks worker --pool=solo --loglevel=info
   
   # Terminal 3: Vite React Dashboard
   cd frontend
   npm install
   npm run dev
   ```

---

## 🧪 Testing the System

1. **End-to-End System Testing**
   - Open the web dashboard at `http://localhost:5173` (or `3000` via docker).
   - Enter `https://demo.opencart.com/` into the URL field and click **Launch Scan**.
   - You will see live real-time console streaming as the Celery worker discovers pages and runs defect detectors natively in Playwright.
   - Navigate to the **Knowledge Graph** tab to interact with the visual map of defects populated via Neo4j.
   - Navigate to the **Issues & Analytics** tab to view pie charts and detailed lists of identified UI, UX, and Functional defects.
