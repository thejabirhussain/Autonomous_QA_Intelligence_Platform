FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends gcc libpq-dev wget gnupg && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
COPY packages/ packages/

RUN pip install --no-cache-dir -r requirements.txt
RUN playwright install --with-deps chromium

COPY . .

CMD ["celery", "-A", "apps.crawler.tasks", "worker", "-Q", "crawler_queue", "--concurrency=3", "--loglevel=info"]
