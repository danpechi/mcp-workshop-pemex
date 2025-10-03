#!/bin/bash

# ⚠️ DEPRECATED: This script is no longer used for workshop deployment
#
# The workshop frontend now runs locally (npm run dev) instead of being deployed
# as a Databricks App. Only the custom MCP server is deployed to Databricks Apps.
#
# See DEPLOY_NOTES.md for the current deployment architecture.
#
# To deploy the workshop:
# 1. Run ./setup.sh for interactive participant setup
# 2. Or use: databricks bundle deploy -t dev
#
# This file is kept for reference only.

echo "⚠️  WARNING: This deployment script is deprecated."
echo ""
echo "The workshop frontend now runs locally for better development experience."
echo "Only the custom MCP server is deployed as a Databricks App."
echo ""
echo "Please use one of these instead:"
echo "  • ./setup.sh                    (interactive participant setup)"
echo "  • databricks bundle deploy      (manual deployment)"
echo ""
echo "See DEPLOY_NOTES.md for details."
echo ""
exit 1

# --- Original Configuration (kept for reference) ---
# APP_FOLDER_IN_WORKSPACE="/Workspace/Users/jai.behl@databricks.com/mcp-workshop-app-dev"
# LAKEHOUSE_APP_NAME="mcp-workshop-app-dev"


# --- Frontend Build ---
echo "Building frontend..."
# Navigate to the frontend directory
cd frontend
# Install dependencies
npm install
# Build the static site
npm run build
# Navigate back to the root directory
cd ..
echo "Frontend build complete."


# --- Backend Packaging ---
echo "Packaging backend..."
# Create a temporary build directory
mkdir -p backend/build
# Create a directory for the static files
mkdir -p backend/build/static
# Copy the static frontend files to the backend build directory
cp -r frontend/out/* backend/build/static/
# Copy the backend application files to the build directory
cp backend/app.py backend/build/
cp backend/requirements.txt backend/build/
cp backend/app.yaml backend/build/
echo "Backend packaging complete."


# --- Workspace Upload ---
echo "Uploading application to Databricks workspace..."
# Upload the contents of the build directory to the specified workspace path
databricks workspace import-dir backend/build "$APP_FOLDER_IN_WORKSPACE" --overwrite
# Clean up the local build directory
rm -rf backend/build
echo "Upload complete."


# --- Application Deployment ---
echo "Deploying application..."
# Deploy the application using the uploaded source code
databricks apps deploy "$LAKEHOUSE_APP_NAME" --source-code-path "$APP_FOLDER_IN_WORKSPACE"
echo "Deployment initiated."


# --- Final URL ---
echo "----------------------------------------------------------------"
echo "Deployment is in progress. It may take a few minutes to complete."
echo "You can check the status in the Databricks UI."
echo "Once deployed, your application will be available at:"
echo "https://mcp-workshop-app-dev-1444828305810485.aws.databricksapps.com"
echo "----------------------------------------------------------------"
