# LINUX PS

## Features
inspect processes

## Flags
- `a` include processes not associated with a terminal
- `-e` all processes
- `-f` full process info
- `u` user friendly format

## View all process with full info
includes:
- parent process ID (PPID)
- command
- memory usage

`ps -ef`

## List all processes in user-friendly format
`ps aux`

## Force Kill a Process
`kill -SIGKILL {PID}`
