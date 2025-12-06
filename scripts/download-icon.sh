#!/usr/bin/env bash

# download-icon.sh
# Usage: ./download-icon.sh 511075/more-grid-small
# Downloads an SVG from https://www.svgrepo.com/show/<ID>/<name>.svg into src/assets/icons/

set -euo pipefail

USAGE="Usage: $(basename "$0") <ID/slug> [output-name.svg]
Example: $(basename "$0") 511075/more-grid-small
This saves to src/assets/icons/more-grid-small.svg"

if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]; then
  echo "$USAGE" >&2
  exit 2
fi

INPUT="$1"

# If the user passes only the slug (e.g., "511075/more-grid-small"), treat it as such.
# Extract the slug from INPUT to generate filename if 2nd arg isn't provided
# Accept either: ID/slug or slug (slug includes both ID and name)

# Directory for icons
ICON_DIR="$(pwd)/src/assets/icons"

mkdir -p "$ICON_DIR"

# Default output filename if not provided
if [ "$#" -eq 2 ]; then
  OUTPUT_NAME="$2"
else
  # Extract the part after the first slash for name
  if [[ "$INPUT" =~ / ]]; then
    # Example: 511075/more-grid-small
    name_part="${INPUT#*/}"
  else
    # No slash present; use whole input as name
    name_part="$INPUT"
  fi
  OUTPUT_NAME="${name_part}.svg"
fi

URL="https://www.svgrepo.com/show/${INPUT}.svg"
TARGET_PATH="$ICON_DIR/$OUTPUT_NAME"

if curl -fsSL "$URL" -o "$TARGET_PATH"; then
  echo "Downloaded $URL -> $TARGET_PATH"
  exit 0
else
  echo "Failed to download $URL" >&2
  # Remove partial file
  [ -f "$TARGET_PATH" ] && rm -f "$TARGET_PATH"
  exit 1
fi
