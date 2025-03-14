# LINUX AT

## Features
use for jobs that should only run once

## Limitations
- not usually installed on ubuntu systems
- scripts run using `/bin/sh`

## Best practices
- use full path to command

## Install
```bash
sudo apt update -y
sudo apt install at
```

## Commands

### List jobs
`atq`

### View specific job
`at -c 1`

### Remove at jobs
`atrm 1`

### Add a job
```bash
# run a job at 15:00
# then add command lines
# save and close with CTRL+d
at '15:00'
> /usr/bin/touch file_creation_at
```
or on a specific date
`at 'March 15 2025'`
or on a specific date and time
`at '08:00 March 15 2025'`
or in 30 minutes
`at 'now + 30 minutes'`
or in 2 hours
`at 'now + 4 hours'`

works for days, weeks, months, as well

### View users denied access to at jobs
`sudo cat /etc/at.deny`