import asyncio
import logging
import json
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from reqon_config.settings import settings
import redis.asyncio as redis

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/v1/ws", tags=["websocket"])

@router.websocket("/scans/{job_id}")
async def scan_websocket(websocket: WebSocket, job_id: str):
    await websocket.accept()
    
    redis_client = redis.from_url(settings.REDIS_URL, decode_responses=True)
    pubsub = redis_client.pubsub()
    channel = f"scan:{job_id}"
    await pubsub.subscribe(channel)
    
    try:
        while True:
            try:
                message = await pubsub.get_message(ignore_subscribe_messages=True, timeout=1.0)
                if message and message['type'] == 'message':
                    data = message['data']
                    await websocket.send_text(data)
                
                # Ping check to keep connection alive and detect disconnects
                await asyncio.sleep(0.1)
                
            except WebSocketDisconnect:
                logger.info(f"WebSocket disconnected for job {job_id}")
                break
            except Exception as e:
                logger.error(f"Error in websocket loop: {e}")
                await asyncio.sleep(1)
    finally:
        await pubsub.unsubscribe(channel)
        await redis_client.aclose() if hasattr(redis_client, 'aclose') else await redis_client.close()
