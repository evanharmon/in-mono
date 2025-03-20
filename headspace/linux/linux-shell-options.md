# LINUX SHELL OPTIONS

## Features
options to set in your scripts or current shell
- enable options with `set -`
- disable options with `set +`

## Treat unset / undefined variables as an error
`set -u` or `set -o nounindirect`

## Debugging 
print commands and output with interpolation
`set -x`

### Verbose
`set -v`

### Exit immediately if any command returns non-zero exit status code
`set -e` or `set -o errexit`
note: this will exit only if the last command in sequence fails
this can be tricky - it'll cause source'd scripts to close terminal on errors..?

```bash
#!/bin/bash
set -e

/bin/command-that-fails
/bin/command-that-fails2
```

## Treat pipeline as single command and exit early on any non-zero exit status code
`set -o pipefail`
note: this will exit early if any command in pipeline fails
