from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json
import os
from datetime import datetime

app = FastAPI(title="Coiffure de Luxe API")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    phone: str
    message: str

MESSAGES_FILE = "messages.json"

def load_messages():
    if os.path.exists(MESSAGES_FILE):
        with open(MESSAGES_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

def save_messages(messages):
    with open(MESSAGES_FILE, "w", encoding="utf-8") as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)

@app.post("/api/contact")
async def submit_contact(message: ContactMessage):
    messages = load_messages()
    new_message = {
        "id": len(messages) + 1,
        "name": message.name,
        "phone": message.phone,
        "message": message.message,
        "timestamp": datetime.now().isoformat()
    }
    messages.append(new_message)
    save_messages(messages)
    return {"status": "success", "message": "Message received"}

@app.get("/api/messages")
async def get_messages():
    return load_messages()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)