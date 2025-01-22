# LINUX PERMISSIONS

## Resources

- [Linux Handy Permissions Calculator](http://permissions-calculator.org/)

## Features
permissions are evaluated `user`, `group`, `other`
`user` is sometimes referred to as `owner` which is confusing.

- root can change permissions / ownership / groups
- only owner (user) or root can change permissions
- user must be part of group to change permissions
- execute permissions needed to `cd` in to a directory
- default file permissions are `-rw-rw-r--`
- default folder permissions are `drwxrwxr-x`

## Examples

### Octal permissios
r w - | r - - | - - - 
1 1 0   1 0 0   0 0 0
6       4       0

r = 4
w = 2
x = 1

`chmod 640 myfile.txt`

### .ssh folder

700 (drwx------)

### Public key (.pub) files

644 (-rw-r--r--)

### Private key files

600 (-rw-------)

## Commands

### Test Folder / File Permissions As Diff User

`sudo -u {user} ls /usr/local/var/run`

### Change Permissions (Mode) Recursively

`chmod -R`

CHMOD
u = user, g = group, o = others
r = read, w = write, x = execute

### Add Execute Permissions

`chmod u+x script.sh`
`chmod g+x script.sh`
`chmod o+x script.sh`

### Remove execute permissions

`chmod u-x script.sh`
`chmod g-x script.sh`
`chmod o-x script.sh`

### Remove all permissions for a user / group / other

`chmod u= script.sh`
`chmod g= script.sh`
`chmod o= script.sh`

### Set exact permissions

`chmod u=rwx script.sh`
`chmod g=rx script.sh`
`chmod o=x script.sh`

### Change user / group / other permissions in single command

`chmod u+rw,g=r,o= mypic.jpg`

### Change Owner

`chown dev package.json`
or on entire directory
`chown -R evan ./`

### Change Group Permissions

`chgrp root package.json`

### Change Owner And Group

`chmod dev:dev package.json`

### User Directory should be not writeable by group or other

`chmod go-w ~`
