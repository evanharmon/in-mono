# LINUX SCRIPT EXIT CODES

## Resources

- [Linux script exit status](https://www.tldp.org/LDP/abs/html/exit-status.html)

## Features
- exit status code stored in `$?` env var
- exit code `0` is often considered success

## Common error codes
- `1`: general error
- `2`: misuse of shell builtins
- `126`: command not executable
- `127`: command not found
- `128`: invalid argument for exit
- `130`: exit due to SIGINT. Common for Ctrl+c
- `255`: command not found in scripts
- above 256: specific exit codes for programs beyond built-ins

## Limitations
- remember exit code is just for the last run command
- including actually running `echo $?`!

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