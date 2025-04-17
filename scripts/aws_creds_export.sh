#!/usr/bin/env bash

# Usage: source aws_creds_export.sh profile_name
# Description: exports the AWS credential variables to the shell


BLUE="\033[94m"
RED="\033[91m"
NC="\033[0m"

profile="${1:?Missing aws profile name}"

function export_creds {
  # Save current shell options
  local old_options
  old_options=$(set +o)

  # Strict options for this function
  # Don't use -e as this shouldn't close terminal on error
  set -uo pipefail

  output=$(aws configure export-credentials --profile "$profile" --format env-no-export)
  rv=$?
  if [ $rv -ne 0 ]; then
    echo -e "$RED error exporting credentials with aws cli $NC"
    # Restore original shell options
    eval "$old_options"
    return
  fi

  for line in $output; do
    # Disabling as `export "${line?}"` did not export correctly causing errors
    # shellcheck disable=SC2116,SC2046
    export $(echo "$line")
  done

  echo -e "$BLUE Exported AWS credential environment variables $NC"

  # Restore original shell options
  eval "$old_options"
}

export_creds
