# LINUX STORAGE NFS

## Features
- file based storage
- works on server / client model
- directory sharing is called `exporting`
- usually has a network firewall between server / clients

## Exports configuration
located at `/etc/exports`

simple example with direct client IPs:
```
/software/repos 10.61.35.201 10.61.35.202 10.61.35.203
```

## Export directories
directories are made available to clients via `exportfs`
export all mounts from `/etc/exports`
`exportfs -a`

manually export to single client
`exportfs -o 10.61.35.201:/software/repos`

## Mount from client
example using server IP or hostname:
`mount 10.61.112.101:/software/repos /mnt/software/repos`