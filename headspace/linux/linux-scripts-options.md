# LINUX SCRIPT OPTIONS

## Options

### Echo commands with interpolation
`set -x`

### Exit immediately if any command returns non-zero exit status code
`set -e` or `set -o errexit`
note: this will exit only if the last command in sequence fails

aborts on first error

```bash
#!/bin/bash
set -e

/bin/command-that-fails
/bin/command-that-fails2
```

### Treat pipeline as single command and exit early on any non-zero exit status code
`set -o pipefail`
note: this will exit early if any command in pipeline fails

## Treat unset / undefined variables as an error
`set -u` or `set -o nounindirect`