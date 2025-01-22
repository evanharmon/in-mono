# LINUX UDEV

## Features
- daemon that runs in User space
- receives `uevents` from kernel space
- handles creating device node in `/dev/`
- `udevadm` cli management tool provided

## Get device information
`udevadm info --query=path --name=/dev/sda5`

## Listen to kernel uevents
`udevadm monitor`