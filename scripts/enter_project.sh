#!/usr/bin/env bash
set -euo pipefail

# Keep this script behaviorally aligned with enter_project.ps1.
cd "${MISE_PROJECT_ROOT:-$(git rev-parse --show-toplevel)}"

# Ensure Commitizen (cz) is available when uv is installed.
if command -v uv >/dev/null 2>&1 && ! command -v cz >/dev/null 2>&1; then
  uv tool install commitizen
  command -v cz >/dev/null 2>&1 || {
    echo "Failed to install commitizen" >&2
    exit 1
  }
fi

# Configure prek hooks idempotently when prek is available.
if command -v prek >/dev/null 2>&1; then
  pre_commit_hook="$(git rev-parse --git-path hooks/pre-commit)"
  commit_msg_hook="$(git rev-parse --git-path hooks/commit-msg)"

  if [ ! -f "$pre_commit_hook" ] || ! grep -q "prek" "$pre_commit_hook" 2>/dev/null; then
    prek install --overwrite >/dev/null
  fi

  if [ ! -f "$commit_msg_hook" ] || ! grep -q "prek" "$commit_msg_hook" 2>/dev/null; then
    prek install --hook-type commit-msg --overwrite >/dev/null
  fi
fi
