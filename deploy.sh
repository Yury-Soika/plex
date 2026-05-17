#!/usr/bin/env bash

set -euo pipefail

# Helper to read specific DEPLOY_* vars from .env without polluting env (e.g. NODE_ENV)
load_env_var() {
  local var="$1"
  local default="$2"
  if [[ -f ".env" ]]; then
    local val
    val="$(grep -E "^${var}=" .env | tail -n 1 | cut -d'=' -f2- || true)"
    if [[ -n "${val}" ]]; then
      echo "${val}"
      return 0
    fi
  fi
  echo "${default}"
}

# Configuration (overridable via .env DEPLOY_* vars)
USER="$(load_env_var DEPLOY_USER "iwbfnzmznr")"
HOST="$(load_env_var DEPLOY_HOST "66.29.148.128")"
APP_ROOT="$(load_env_var DEPLOY_APP_ROOT "/home/iwbfnzmznr/plex")"
PORT="$(load_env_var DEPLOY_PORT "3000")"
SSH_PORT="$(load_env_var DEPLOY_SSH_PORT "22")"

echo "==> Deploying Plex to ${USER}@${HOST}:${APP_ROOT}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "==> Installing dependencies (npm ci)"
npm ci

echo "==> Building production bundle (NODE_ENV=production npm run build)"
NODE_ENV=production npm run build

echo "==> Creating production-build.tar.gz"
# On macOS, avoid xattrs so Linux tar won't warn when extracting
COPYFILE_DISABLE=1 tar czf production-build.tar.gz \
  .next \
  app.js \
  package.json \
  package-lock.json \
  public \
  .env \
  next.config.* 2>/dev/null || true

echo "==> Uploading archive to server via scp (port ${SSH_PORT})"
scp -P "${SSH_PORT}" production-build.tar.gz "${USER}@${HOST}:${APP_ROOT}/"

echo "==> Running remote deploy commands over SSH (port ${SSH_PORT})"
# CloudLinux NodeJS Selector: node_modules must be a symlink to the venv, not a real folder.
# Do NOT run npm ci in app root; use the panel's Install dependencies / Restart instead.
ssh -p "${SSH_PORT}" "${USER}@${HOST}" bash -lc "
  set -euo pipefail
  cd '${APP_ROOT}'
  echo ' -> Unpacking production-build.tar.gz'
  tar xzf production-build.tar.gz
  echo ' -> Removing real node_modules if present (CloudLinux uses venv symlink)'
  rm -rf node_modules
  echo ' -> Removing next.config.ts so Next uses next.config.js (no TypeScript at runtime)'
  rm -f next.config.ts
  echo ' -> Done. In the hosting panel: run Install dependencies (if needed), then Restart app.'
"

echo "==> Deployment complete."

