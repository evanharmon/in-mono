# LINUX APT

## Features
more fully-featured than `apt-get`

## Software repositories

located at:
`/etc/apt/sources.list`
and
`/etc/apt/sources.list.d/`

## Commands

### Update packages

`apt update`

### Upgrade packages

`apt upgrade`

### Edit Sources

`apt edit-sources`

### Uninstall package

`apt remove telnet`

### Search for package

`apt search telnet`

### List versions of a package

`apt list -a kubeadm`

### List packages installed

`apt list --installed`

### Mark equivalents

`apt hold kubectl`
`apt unhold kubectl`
