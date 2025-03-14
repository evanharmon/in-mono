# LINUX SYSTEM LOGS

## Features
use `journalctl` where possible for easier searching of logs

- rsyslog is most common
- stored at `/var/log/`
- typically stored as text files

## Limitations
- typically needs root access to read

## Typical logging messages
- status
- errors
- warnings

## Backups
logs like `/var/log/auth.log` will be most recent
backups can be visible with names like `auth.log.1`, `auth.log.2.gz`, etc