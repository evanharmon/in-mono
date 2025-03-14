# LINUX SYSTEMCTL

## Features
used to control systemd
- manage system state
- start / stop / restart / reload
- enable / disable
- list and manage units
- list and update targets
- view information about system state
- handles lifecycle

## States
- Active
- Inactive
- Failed

## Commands

### Show What Systemd Is Using
`systemctl`

### List all the units systemd is attempting to load
```bash
systemctl list-units --all
# or for only active units
systemctl list-units
# or just all services
systemctl list-units --type=service --all
```

### Check Status Of A Systemd Script
`systemctl status sound.target`

or for scripts - the below is great bc it outputs `active`, `inactive`, or `unknown`
`systemctl is-active etcd`

### Start / stop service
`systemctl start sound.target`
`systemctl stop sound.target`

### Restart
restart a service - will be disruptive if in use
`systemctl restart docker.service`

### Reload
re-read config files without stopping and restarting service.
Not all applications support graceful-reload

```bash
# if cmd supports reload
systemctl reload docker
# or fallback to restart
systemctl reload-or-restart docker
```

### Enable / disable
enable / disable service to run at boot

`systemctl enable docker`
`systemctl disable docker`

### Enable and start service
Enable does not necessarily automatically start the service

```bash
systemctl enable docker.service
systemctl start docker.service
# or one-liner
systemctl enable --now docker.service
```

### Enable A Target / Run Level
`systemctl enable multi-user.target`

### Set Default Run Level
`systemctl default multi-user.target`

### Check runlevel / target
`systemctl get-default`
looks at file: `/etc/systemd/system/default.target`
which often points to: `/lib/systemd/system/<mode>.target`

### Change runlevel / target
`systemctl set-default multi-user.target`
creates new symlink

### Reload system manager configuration / systemd
necessary for systemd to pick up .service file changes
- reload systemd units
- updates systemtd internal config
- necessary when adding / removing service

`systemctl daemon-reload`

### Edit service file with systemctl
changes are applied immediately without needing daemon-reload
`systemctl edit --full my-project.service`

### Revert edits to service file
`systemctl revert my-project.service`

### View property for a service

```bash
systemctl show --property=MainPID ssh.service
# or output just the PID
systemctl show --property=MainPID ssh.service \
  | awk -F '=' '{print $2}'
```