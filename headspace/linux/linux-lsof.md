# LSOF

## Resources

- [LSOF Guide](http://www.catonmat.net/blog/unix-utilities-lsof/)

## Features
list all open files belonging to a process

## Commands

### List files open by process
`lsof -p <process_id>`

### List all Processes Using Ports

`lsof -i`

### List Processes Listening On Port n

`lsof -i :<n>`

### List Processes On Ports By Name

`lsof -i | grep <Name>`

### List PWD Directory Of A Process

`lsof -p <PID>`

### List all open files by program's name

`lsof -c node`

### List all TCP ports open

`lsof -i tcp`
