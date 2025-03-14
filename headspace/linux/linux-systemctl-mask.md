# LINUX SYSTEMCTL MASK

## Features
prevent services from being started or run by systemd
- uses symbolic links
- prevents other services from starting the masked service

## Use cases
- disable unnecessary services
- test / develop

## Types

### Link based
create symlink with same name but ending in `mask`

### Directory based
create a directory `/etc/systemd/system/masked-units`.
masked files are placed inside it.

## Commands

### Mask
`systemctl mask atd.service`

then the below commands would fail
```bash
systemctl enable atd.service
systemctl start atd.service
```

### Remove mask
`systemctl unmask atd.service`
creates symlink `/etc/systemd/systemctl/atd.service -> /dev/null`