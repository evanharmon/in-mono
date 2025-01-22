# LINUX SYSTEMCTL

## Features
used to control systemd
- manage system state
- start / stop / restart / reload
- enable / disable
- list and manage units
- list and update targets
- view information about system state

## States
- Active
- Inactive
- Failed

## Commands

### Show What Systemd Is Using
`systemctl`

### List all the units systemd is attempting to load
`systemctl list-units --all`
or for only active units
`systemctl list-units`

### Check Status Of A Systemd Script
`systemctl status sound.target`

### Start A Systemd Script
`systemctl start sound.target`

### Stop A Systemd Script
`systemctl stop sound.target`

### Reload
re-read config files without stopping and restarting service.
Obviously 
`systemctl reload docker`

### Enable / Disable
`systemctl enable docker`
`systemctl disable docker`

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
`systemctl edit my-project.service --full`