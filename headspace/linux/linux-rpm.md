# RPM

## Features
package manage for RHEL redhat

## Commands

### Install
`rpm -ivh telnet.rpm`

### Uninstall
`rpm -e telnet.rpm`

### Upgrade
`rpm -Uvh telnet.rpm`

### Search for package
`rpm -q telnet.rpm`

### Verify
`rpm -Vf <path_to_file>`

### Check scripts on rpm package

`rpm -qp --scripts filename.rpm`

### Get location of yum package install

`rpm -ql avahi-libs`
