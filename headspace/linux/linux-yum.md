# YUM

## Resources

- [Cheat Sheet](https://access.redhat.com/sites/default/files/attachments/rh_yum_cheatsheet_1214_jcs_print-1.pdf)
- [SO install from file](https://unix.stackexchange.com/questions/47304/centos-install-packages-listed-in-a-text-file)

## Features
Package manager for: amazon linux, centos
- `-y` avoids prompt

## Software Repositories
- repos live in `/etc/yum.repos.d`
- OS comes bundled with own software repo

default for OS is: `/etc/yum.repos.d/redhat.repo`

## Transactions
- does transaction checks, checks system then repos for package
- also checks if dependencies are installed
- looks to see what dependencies need to be upgraded
- shows final Transaction summary to user

## Commands

### List packages install

`yum list sudo`

### List all installed packages

`yum list installed`

### List software respositories

`yum repolist`

### Find Package

`yum search vim`

### Check for updates - dry run

`yum check-update`

### Check what packages use a dependency
`yum provides scp`

### Install list of packages from file

`yum -y install $(cat filename cat | tr '\n' ' ')`

### Update packages
single package: `yum update telent`
all packages: `yum update`

### Install single package
`yum install -y scl-utils`

### Uninstall package
`yum remove httpd`

### List all available group packages

`yum grouplist`

### Get info on group package

`yum groupinfo "Development Tools"`

## AMAZON LINUX

#### Install RPM's on Amazon Linux

https://aws.amazon.com/premiumsupport/knowledge-center/ec2-enable-epel/
`vim /etc/yum.repos.d/repel.repo`
change enabled=0 to enabled=1
BETTER METHOD
`sudo yum-config-manager --enable epel`

## Install GCC8 / Clang6 On Amazon Linux / RHEL / CENTOS

- [STACK](https://unix.stackexchange.com/questions/477360/centos-7-gcc-8-installation)

```bash
yum install -y scl-utils
yum install centos-release-scl
yum install devtoolset-8-gcc devtoolset-8-gcc-c++
scl enable devtoolset-8 -- bash
```
