## LINUX USER NEW USER

## Add a new user with username as group

### Create user without any prompting

```bash
adduser \
    --home /home/evan \
    --shell /bin/bash \
    --disabled-password \
    --gecos "Evan Harmon" \
    evan
```

## Add a new user in separate group
does not auto-create group based on username

### Create group

`addgroup --gid 1010 developers`

### Create user without any prompting

```bash
adduser \
    --home /home/evan \
    --shell /bin/bash \
    --disabled-password \
    --gecos "Evan Harmon" \
    --ingroup developers \
    evan
```

### Add as sudoer with full privileges
adds user to group - not directly to `/etc/sudoers` file.
This works bc the sudoers file has `%sudo   ALL=(ALL:ALL) ALL`
`-p ''` is very important - keeps the password the same as user which is probably disabled / empty
`sudo usermod -aG sudo -p '' evan`