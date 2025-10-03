# Backend Directory (Deprecated)

**⚠️ This directory is no longer used for workshop deployment.**

## Status

This backend was originally intended to serve the workshop frontend as a Databricks App, but the workshop has been updated to:
- Run the **frontend locally** for development (`npm run dev` in `frontend/`)
- Deploy only the **custom MCP server** as a Databricks App (from `custom-mcp-template/`)

## Historical Context

Previously, this FastAPI server would:
1. Serve static files from the built Next.js frontend
2. Be deployed to Databricks Apps via `deploy.sh`
3. Provide the workshop interface at a Databricks Apps URL

## Current Architecture

- **Workshop Frontend**: Run locally at `http://localhost:3000` (from `frontend/`)
- **MCP Server**: Deployed to Databricks Apps (from `custom-mcp-template/`)
- **Resources**: Unity Catalog, sample data (via setup jobs in `setup/`)

## Files in This Directory

- `app.py` - FastAPI server that mounts static files
- `app.yaml` - Databricks App configuration (app command)
- `requirements.txt` - Python dependencies (fastapi, uvicorn)

These files are kept for reference but are not part of the active deployment process.


