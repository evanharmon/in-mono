# LINUX DPKG

## Features
debian package manager

## Commands

### List Installed Packages

`dpkg -l`

### Install or upgrade package
`dpkg -i telnet.deb`

### Uninstall package
`dpkg -r telnet.deb`

### List packages
`dpkg -l telnet`

### Check status of package
`dpkg -s telnet`

### Verify package
`dpkg -p <path_to_file>`

### Print architecture info
`dpkg --print-architecture`