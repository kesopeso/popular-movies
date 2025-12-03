#!/usr/bin/env bash

# Execute from the project root folder
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

if [ ! -f ".env.production" ]; then
    echo "Error: .env.production file is missing"
    exit 1
fi

docker compose up -d --build

echo "App is available at: http://localhost:3000"
