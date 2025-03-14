# LINUX SIGNALS

## Features
software interrupt
- `SIGKILL` and `SIGSTOP` cannot be ignored by process

## Types

### Terminal
`SIGINT` - allows clean exit
`SIGTERM` - terminate voluntarily, allows cleanup
`SIGKILL` - immediate termination with no cleanup

### Informational
`SIGCHILD`
`SIGHUP`

### Async-safe
`SIGALRM`
`SIGUSR1`

## Pause and continue signals
`SIGSTOP` - suspends exeuction. moves process to stopped state
`SIGCONT` - resumes execution - becomes responsive to signals again

## Signals that do not support handler execution
`SIGKILL`
`SIGSTOP`
`SIGCONT`