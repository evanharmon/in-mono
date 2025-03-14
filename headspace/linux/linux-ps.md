# LINUX PS

## Features
inspect processes
- supports unix syntax like `ps -a`
- supports bsd syntax like `ps a`

## Flags
- `-a` include processes not associated with a terminal
- `-e` all processes
- `-f` full process info (BSD) / tree otherwise
- `-u` user friendly format
- `-x` include processes without a controller terminal

## Limitations

- `f` flag doesn't show tree view on BSD

## Display

### Cpu
100% means 1 full core. 150% would be mean 1.5 cores used
tracked on the full second level - so 

### Time
how much CPU has been used over the process lifetime
1 second = 100% cpu (full core) for a full second

### Command
system processes are listed in brackets `[kthreadd]` - running inside privileged area of kernel
user spaced processes will not be in brackets

## Commands

### View processes in current terminal / session
`ps`

### View all process with full info
includes:
- parent process ID (PPID)
- command
- memory usage

`ps -ef`

### List all processes in user-friendly format
`ps aux`

### Force Kill a Process
`kill -SIGKILL {PID}`

### Show processes started by user
`ps u -U evan`

### Show nice values
`ps lax`

### Show parent and child processes in tree format
```bash
ps fax
# or with nice cpu / user friendly view
ps faux
```