# LINUX NETSTAT

## Flags
- `-n` don't resolve names - no DNS lookup
- `-r` show routing tables

## Check what is running on a port
`netstat --all --numeric --programs`
`netstat -anp | grep 80`

## Check what is listening on a port

`netstat --listening 3000`

## Only show info on internet protocols
`netstat -f inet`

## Show routing table
`netstat -rn -f inet`

## Show default routes
`netstat -rn -f inet | grep '^default.*'`