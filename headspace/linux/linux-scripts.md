# LINUX SCRIPTS

## Resources

- [Script Single Quote Double Quote](http://mywiki.wooledge.org/Quotes)
- [Script Bash One Liners](https://github.com/onceupon/Bash-Oneliner)

## Features
- each line is processed serially

## Best Practices
- when running as command like executable, leave off the extension
- use `source script` when variables / changes need to be preserved
- use `./script` or `bash ./script` when script shouldn't affect current shell
- use `/usr/bin/env` in shebangs
- use `./scripts/one-offs` for one off scripts

## Common colors
`NC` is for resetting the color
```bash
RED="\033[1;31m"
YELLOW="\033[1;33m"
GREEN="\033[1;32m"
BLUE="\033[1;34m"
NC="\033[0m"
```

## Interpreters

### Set an interpreter
Use the `#!` shebang to state what shell / process should be used to run the script

bash: `#!/usr/bin/env bash`
python: `#!/usr/bin/env python`

`/usr/bin/env` is better than a direct path.
- more portable across diff systems
- version of interpeter can be set via environment variable by user
- `env` locates the first instance of the interpeter from PATH
- more consistent across containers / vm's, etc

## Make script executable
`chmod +x setup-node`

## Run in current shell as child process
NOTE: using `exit 0` will close the terminal as well
- variables, functions, changes are preserved after script runs
- script output can be captured by `tee`, `grep`, etc.

`source script.sh` or `. script.sh`

Check to see if a script was sourced `[[ "${BASH_SOURCE[0]}" != "${0}" ]] && sourced=1 || sourced=0`

## Run script in new shell as standalone program
- new shell process is created
- environment in parent shell is not affected
- any variable modifications are lost when script finishes

`./script.sh` or `bash script.sh`


## Run script without executable bit set
this will run in it's own shell apart from the current one.
environment's will be isolated

`bash ./script.sh`

## Writing Scripts

### Script Error Unary Operator Expected

Double quote your variables!

`"$IP"`

### Check if ZSH is shell and script is sourced
```sh
# This script is being executed directly or sourced
if [[ "$0" == "$ZSH" || "$ZSH_VERSION" != "" ]] ; then
    echo "This script is running directly within zsh or being sourced within zsh."
    # Check if being sourced
    if [[ -n "$(typeset -R ZSH_EVAL_CONTEXT)"]] && [[ $(typeset -R ZSH_EVAL_CONTEXT) == *file* ]]; then
        echo "And is being sourced."
    fi
else
    echo "This script is not running directly within zsh."
fi
```

## Parameters

#### Append / Pass parameters from script call

`aws s3 cp . s3://$BUCKET "${@}"`

## Operators

equals

```bash
if [[ rv -eq 0 ]]; then
    echo "should not be 0" 1>&2
    return exit 1
fi
```

not equals

```bash
if [[ rv -ne 0 ]]; then
    echo "should be 0" 1>&2
    return exit 1
fi
```
