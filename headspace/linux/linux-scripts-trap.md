# LINUX SCRIPTS TRAP

## Features
executes a set of commands on script exit
- good for managing cleanup operations

## Examples
```bash
# on just terminate
trap 'rm -f temp_*' TERM
# on specific exit codes
trap 'rm -f temp_*' 0 2 15
# on specific term signal names
trap 'rm -f temp_*' EXIT INT TERM
# call function with argument
trap cleanup_exit tempfile1.txt EXIT
# call another script with arg on exit
trap ./cleanup.sh tempfile1.txt EXIT
```

### Cleanup temporary files
```bash
#!/usr/bin/env bash

## Trivial example - obviously this would leave orphan temp files and could fill up storage
# create temp file
temp_file=$(mktemp)

# function to leave temp file in place on interrupt
cleanup_int() {
   echo "INT signal received. Not removing $temp_file. Delete the file yourself."
   exit 130 # SIGINT
}

trap cleanup_int INT

# function to cleanup temp file on exit
cleanup_exit() {
  if [ $? -ne 130 ]; then
    echo "Cleaning up temp file: $temp_file"
    rm -f "$temp_file"
  fi
}

trap cleanup_exit EXIT

echo "Script started. Temp file created: $temp_file"

# created temp files
echo "data" > "$temp_file"

# simulate work
sleep 10

echo "Script finished."
```