# LINUX FILESYSTEM

## Hierarchy

### /dev
devices / io over serial

### /home
- user directory for all but root

### /root
root user home directory

### /opt
for third-party applications

### /mnt
temporary filesystem mounting

### /tmp
temp dir

### /media
all external media like usb drives are mounted here
device still exists in `/dev/` of course

### /bin
basic binaries for system

### /etc
stores configuration files
- can be read by any user by default
- only root can write by default
- cli tools should be used to edit these files where possible

### /lib or /lib64
shared libraries

### /usr
where user applications and associated user data reside

### /var
this is where system stores logs and cache'd data

## Commands

### check filesystem
`df -hP`