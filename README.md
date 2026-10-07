# Multi-Site Local Hosting with NGINX Reverse Proxy

This project demonstrates how multiple websites and services can run on the **same machine** using **NGINX as a reverse proxy** to route incoming traffic based on domain names.

## Architecture

| Domain | Target Application | Port | Technology |
| :--- | :--- | :--- | :--- |
| `http://react.local` | React Frontend | `127.0.0.1:3000` | Bun + React + Vite |
| `http://api.local` | FastAPI Backend | `127.0.0.1:8000` | uv + FastAPI + Uvicorn |
| `http://next.local` | Next.js Frontend | `127.0.0.1:3001` | Bun + Next.js App Router |
| Reverse Proxy | NGINX Container | `0.0.0.0:80` | Docker (`nginx:alpine`) |

## Quick Commands

### 1. Start Services Manually

- **React Site (Port 3000):**
  ```bash
  cd react-site && bun run dev
  ```
- **FastAPI Backend (Port 8000):**
  ```bash
  cd fastapi-site && uv run uvicorn main:app --host 127.0.0.1 --port 8000
  ```
- **Next.js Site (Port 3001):**
  ```bash
  cd next-site && bun run dev
  ```
- **NGINX Reverse Proxy (Port 80):**
  ```bash
  docker compose up -d
  ```

### 2. Configure Local DNS (/etc/hosts)

Add this line to `/etc/hosts`:
```bash
echo "127.0.0.1 react.local api.local next.local" | sudo tee -a /etc/hosts
```
