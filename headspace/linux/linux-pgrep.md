# LINUX PGREP

## Features
grep for processes
- `-a` to include ancestors
- `-l` long output with name

## Limitations
may need to use `sudo` to check for root / other user processes

## Commands

### Show process by name
`pgrep -al syslog`

### Check what other process is using a file
`sudo lsof /tmp/myfile.txt`