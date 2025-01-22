# LINUX ADDUSER

## Features
modern, user-friendly alternative to `useradd`
- prompts for additional information such as password
- provides defaults for home directory, shell, group membership
- default group membership is same name a user, this is debian default

## Flags
- `--gecos` avoids the prompt for user comments
- `--disabled-password` allows SSH RSA key logins but not using password auth
- `--ingroup` adds user to existing group, does not auto create group from username
- `--home` is optional but can specify different home dir
- `--shell` is optional and defaults to `/bin/bash`

## Configuration
default configuration file is `/etc/adduser.conf`
custom file can be passed in via `--conf FILE` flag

## Command

### Create user with defaults and prompt for info
will prompt to set password and additional info
creates home directory as well
`adduser evan`

### Create user with defaults and DO NOT prompt
passwordless auth
auto-generates group based on username
```bash
adduser \
    --home /home/evan \
    --shell /bin/bash \
    --disabled-password \
    --gecos 'Evan Harmon' \
    evan
```

### Add existing user to a group
`adduser evan developers`