# LINUX SCRIPTS CODE GUIDELINES

## Linting
check the script with `shellcheck`

## Shebang
make sure `#!/usr/bin/env` is used for interpeter

## Variables
- wrap in quotes to prevent glob / word splitting `"$n"`

## Flags
- `set -euo pipefail`

## Requirements
- check for necessary installed tools, provide a message and link for download

## Usage
- comments on usage should exist at the top below interpreter

## Functions
code to potentially move in to functions:
- repeated code
- code involving checking a status to decide to do work

## Comments
- each section of work should have a descriptive comment

## Printing
- each section should have a print or echo to show progress and work being done

## Idempotent
- wherever possible, write a script so it can be re-run

## Status
- where possible, use checks like `systemctl is-active` to check progress or if work is really needed