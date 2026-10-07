from fastapi import FastAPI

app = FastAPI(title="FastAPI Site")

@app.get("/")
def read_root():
    return {
        "message": "Hello from FastAPI",
        "domain": "http://api.local",
        "internal_port": "127.0.0.1:8000",
        "status": "running behind NGINX"
    }

@app.get("/api/hello")
def read_hello():
    return {
        "message": "Hello from FastAPI endpoint /api/hello"
    }
