# LINUX SCRIPTS

## Resources

- [Script Linter](http://www.shellcheck.net)
- [Script Single Quote Double Quote](http://mywiki.wooledge.org/Quotes)
- [Script Exit Status](https://www.tldp.org/LDP/abs/html/exit-status.html)
- [Script Bash One Liners](https://github.com/onceupon/Bash-Oneliner)

## Features
- each line is processed serially

## Best Practices
- when running as command like executable, leave off the extension
- use `source script` when variables / changes need to be preserved
- use `./script` or `bash ./script` when script shouldn't affect current shell

## Interpreters

### Set an interpreter
Use the `#!` shebang

bash: `#!/usr/bin/env bash`
python: `#!/usr/bin/env python`

## Make script executable
`chmod +x setup-node`

## Run in current shell as child process
- variables, functions, changes are preserved after script runs
- script output can be captured by `tee`, `grep`, etc.

`source script.sh` or `. script.sh`

## Run script in new shell as standalone program
- new shell process is created
- environment in parent shell is not affected
- any variable modifications are lost when script finishes

`./script.sh` or `bash script.sh`

## Writing Scripts

### Script Error Unary Operator Expected

Double quote your variables!

```bash
"$IP"
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
