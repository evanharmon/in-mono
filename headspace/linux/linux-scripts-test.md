# LINUX SCRIPTS TEST

## Features
- older version of `[[ ]]`

## Example
```bash
FILE="example.txt"
if test -f "$FILE"; then
  echo "file found: $FILE"
else
  echo "file not found: $FILE"
fi
```
