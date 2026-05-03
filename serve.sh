#!/bin/bash

# Simple development server script
echo "Starting development server..."
echo "Opening in browser: http://localhost:8080"

# Try to use Python's built-in server first
if command -v python3 &> /dev/null; then
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    python -m http.server 8080
else
    echo "No Python installation found. Please install Python to run the development server."
fi