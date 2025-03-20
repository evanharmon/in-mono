#!/usr/bin/env bash

# Usage: source aws_creds_export.sh profile_name
# Description: exports the AWS credential variables to the shell

# Don't use -e as this shouldn't close terminal on error
set -uo pipefail

BLUE="\033[94m"
RED="\033[91m"
NC="\033[0m"

profile="${1:?Missing aws profile name}"

function export_creds {
  output=$(aws configure export-credentials --profile "$profile" --format env-no-export)
  rv=$?
  if [ $rv -ne 0 ]; then
    echo -e "$RED error exporting credentials with aws cli $NC"
    return
  fi

for line in $output; do
    # Disabling as `export "${line?}"` did not export correctly causing errors
    # shellcheck disable=SC2116
    # shellcheck disable=SC2046
    export $(echo "$line")
  done

  echo -e "$BLUE Exported AWS credential environment variables $NC"
}

export_creds