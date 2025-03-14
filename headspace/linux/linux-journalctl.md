# LINUX JOURNALCTL

## Features
list logs for systemd or other commands
- default is oldest entries to newest
- defaults to less pager
- supports filtering by date or 24 hour time
- groups logs by when the system booted

## Access
requires root user or user access to specific groups
- `wheel` for redhat
- `adm` or `sudo` for ubuntu

## Log levels
- alert
- crit
- debug
- emerg
- err
- info
- notice
- warning

## Persistence
journalctl looks for folder `/var/log/journal` and if it doesn't find it, won't store logs on disk
otherwise it start to persist systemd logs on disk.

```bash
# start journalctl persisting systemd logs
# create the dir
sudo mkdir /var/log/journal/
```

## Commands

### View all logs
```bash
journalctl
# or open at end
journalctl -e
```

### View specific log level
```bash
# press tab twice after `-p` for a list
journalctl -p err
```

### Filter logs
```bash
# Info logs starting with b
journalctl -p info -g '^b'
# Since a specific time (24 hour)
journalctl -s 03:00
# Since and until for a range (24 hour)
journalctl -S 03:00 -U 04:00
# Or by date
journalctl -S '2025-03-14 01:00:00'
```

### View logs since current boot
note: system may be configured to only keep most recent boot messages
- logs still stored in /var/log but journalctl may be only looking in-memory

```bash
journalctl -b
# or previous boot, etc - not the negative
journalctl -b -1
```

### View logs for a unit / service
```bash
journalctl -u kubelet
journalctl -u kubelet.service
```

### View logs for a command
`journalctl /usr/bin/sudo`
