# LINUX SYSTEMD TARGETS

## Requirements
- password must be set for root user in order to change targets

## Target types
Run Level 0: poweroff.target
Run Level 1: rescue.target
Run Level 2,4: multi-user.target
Run Level 3: multi-user.target
Run Level 5: graphical.target
Run Level 6: reboot.target
emergency: emergency.target

### Multi-user.target
- starts daemons and networking
- text based only
- allows multiple user logins

### Rescue.target
as few services as possible loaded
- slightly more services than emergency.target
- drops in to root shell

good for fixing settings, backing up stuff while not running, etc.

### Emergency.target
loads up as few programs as possible - useful for hardware debugging
- mounts root filesystem as read-only

## Commands

### Set default target
`systemctl set-default multi-user.target`

### Check default target
`systemctl get-default`

### Set target to non-graphical
`multi-user.target`

### Temporarily switch back to graphical without restart
does not change default
`systemctl isolate graphical.target`