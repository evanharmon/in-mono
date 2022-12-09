# UNIX LINUX SCRIPTS

## Resources

- [Script Linter](http://www.shellcheck.net)
- [Script Single Quote Double Quote](http://mywiki.wooledge.org/Quotes)
- [Script Exit Status](https://www.tldp.org/LDP/abs/html/exit-status.html)
- [Script Bash One Liners](https://github.com/onceupon/Bash-Oneliner)

## Safe Way To Run Bash

```bash
#!/usr/bin/env bash
```

## Running Scripts

Run And Execute Commands From Current Shell Enviroment

```console
source ./script.sh
```

Run script in new shell

```console
./script.sh
```

## Writing Scripts

### Options

Echo commands with interpolation

```bash
set -x
```

Exit early if pipeline returns non-zero code

```bash
set -e
```

Exit early if pipeline returns non-zero code

### If Statements

Safely check for multi word command

```bash
if [ -x "$(command -v yarn)" ]; then
fi
```

### Script Error Unary Operator Expected

Double quote your variables!

```bash
"$IP"
```

### Abort On First Error

```bash
#!/bin/bash
set -e

/bin/command-that-fails
/bin/command-that-fails2
```

## Check If Last / Prior Command Errored

```bash
access_key_id=$(echo "$creds_json" | jq --exit-status --raw-output '.Credentials.AccessKeyId')
rv="$?"
if [[ $rv -ne 0 || ! $access_key_id ]]; then
    echo "$pkg: failed to parse output for access_key_id: $creds_json" 1>&2
    return "$rv"
fi
```

## Check If Folder Exists And Remove

```bash
DIR=/tmp/dir.lock
if [ -d "$DIR" ]; then
    printf '%s\n' "Removing Lock ($DIR)"
    rm -rf "$DIR"
fi
```

## Variables

#### Set Default Variables

```bash
BUCKET="${BUCKET:-mydefaultvalue}"
```

#### Set Current Directory Name With Only Basename

```bash
CURR_DIR="${CURR_DIR:-${PWD##*/}}"
```

## Parameters

#### Append / Pass parameters from script call

```bash
aws s3 cp . s3://$BUCKET "${@}"
```

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

## Check Exit Status

```bash
#!/bin/bash

echo hello
echo $?    # Exit status 0 returned because command executed successfully.

lskdf      # Unrecognized command.
echo $?    # Non-zero exit status returned -- command failed to execute.

echo

exit 113   # Will return 113 to shell.
           # To verify this, type "echo $?" after script terminates.
```

## Get Length / Number Of Characters

```bash
result="$(rg 'awscli')"
if [${#result} > 0]; then
	echo "found it"
fi
```

## Check directory exists

```bash
if [ -d $HOME/.local ]; then
	# something something
fi
```

## Check file exists

```bash
if [ -f $HOME/.zshrc ]; then
	# something something
fi
```

## Check if environment variable is not set

`-n` checks if not an empty string

```bash
if [ -z "$CODESPACES" ] ; then
fi
```

## Check if environment variable is not set

`-n` checks if string is not null

```bash
if test -n "${CODESPACES+x}" ; then
fi
```
