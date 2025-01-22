# LINUX JOURNALCTL

## Features
list logs for systemd
- default is oldest entries to newest

## Commands

### View logs since current boot
`journalctl -b`

### View logs for a unit
`journalctl -u UNIT`
or
`journalctl -u kubelet`
or
`journalctl -u kubelet.service`
