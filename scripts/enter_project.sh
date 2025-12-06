#!/bin/bash

if ! command -v cz >/dev/null; then
	pip install --user pipx
	pipx install commitizen
fi

if [ ! -f .git/hooks/pre-commit ]; then
	pre-commit install
fi

if [ ! -f .git/hooks/commit-msg ]; then
	pre-commit install --hook-type commit-msg
fi
