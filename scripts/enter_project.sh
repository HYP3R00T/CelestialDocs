#!/bin/bash

if ! command -v cz >/dev/null; then
	pip install --user pipx
	pipx install commitizen
fi

if command -v prek >/dev/null 2>&1; then
    if [ ! -x .git/hooks/pre-commit ] || ! grep -q "prek" .git/hooks/pre-commit 2>/dev/null; then
        prek install --overwrite >/dev/null
    fi

    if [ ! -x .git/hooks/commit-msg ] || ! grep -q "prek" .git/hooks/commit-msg 2>/dev/null; then
        prek install --hook-type commit-msg --overwrite >/dev/null
    fi
fi
