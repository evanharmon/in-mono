# LINUX USERADD

## Features
this is the old System V command - prefer to use `adduser` now

- requires root

## Commands

### Create user with default shell and home directory
`useradd -m -s <default_shell> username/login_name`
example from dockerfiles:
`useradd -m -s /bin/bash app`

### Add user to an existing group

`useradd -u 1010 -g evan -s /bin/sh evan`

### Add user with additional options
`-c` is for custom comments

```bash
useradd -u 1010 -g 1010 \
    -d /home/evan \
    -s /bin/bash \
    -c "Headspace member" \
    evan
```