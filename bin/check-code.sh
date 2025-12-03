#!/usr/bin/env bash

# Execute from the project root folder
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

# Check if node_modules exists in the project root, if not run npm install
if [ ! -d "node_modules" ]; then
  bin/cmd.sh npm install
fi

bin/cmd.sh npm run type:check
bin/cmd.sh npm run lint
bin/cmd.sh npm run format:check
