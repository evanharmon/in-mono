# LINUX SHUTDOWN

## Features
use `systemctl` prefix when you want a controlled shutdown of systemd services as well

## Command Examples

### Default is 1 min
`shutdown`

### Shutdown immediately
`shutdown now`

### Shutdown reboot
`shutdown -r`

### Cancel shutdown
`shutdown -c`

### Shutdown at specific time
24 hour format
```bash
# at 2AM
shutdown 02:00
# in 15 min
shutdown +15
```

### Shutdown with WALL message
will show message to all logged in users on server
```bash
# default message
shutdown -r +15
# custom message
shutdown -r +15 'Shutting down in 15 minutes'
```