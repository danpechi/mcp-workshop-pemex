#!/bin/bash

# Databricks MCP Workshop - Environment Activation Script
# Source this file to activate the workshop virtual environment
# Usage: source ./activate_env.sh

if [ -f ".venv/bin/activate" ]; then
    source .venv/bin/activate
    export PATH=".venv/bin:$PATH"
    echo "✅ Virtual environment activated"
    echo "📦 Available tools:"
    echo "   • databricks --version: $(databricks --version 2>/dev/null || echo 'not found')"
    echo "   • terraform --version: $(terraform --version 2>/dev/null | head -1 || echo 'not found')"
    echo "   • python --version: $(python --version 2>/dev/null || echo 'not found')"
    echo ""
    echo "💡 To deactivate: run 'deactivate'"
else
    echo "❌ Virtual environment not found. Please run ./setup.sh first."
fi
