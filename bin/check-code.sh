#!/usr/bin/env bash

# Execute from the project root folder
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

bin/cmd.sh npm run type:check
bin/cmd.sh npm run lint
bin/cmd.sh npm run format:check
