#!/usr/bin/env bash

# Execute from the project root folder
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

# Check if at least one argument is provided
if [ $# -eq 0 ]; then
    echo "Error: No input provided"
    echo "Usage: cmd.sh <command> [arguments...]"
    echo "Example: cmd.sh npm --version"
    exit 1
fi

docker run --rm -i -t --rm -u $(id -u):$(id -g) -v $(pwd):/app -w /app node:25.2.1-alpine3.22 "$@"
