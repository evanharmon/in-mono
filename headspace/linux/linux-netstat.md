# LINUX NETSTAT

## Flags
- `-n` don't resolve names - no DNS lookup
- `-r` show routing tables

## Limitations
- `-p` flag won't work on macOS as it's a diff implementation

## Check what is running on a port
```bash
netstat --all --numeric --programs
netstat -anp | grep 80
# for macOS - have to use lsof -n -p <pid>
```

## Check what is listening on a port

`netstat --listening 3000`

## Only show info on internet protocols
`netstat -f inet`

## Show routing table
`netstat -rn -f inet`

## Show default routes
`netstat -rn -f inet | grep '^default.*'`