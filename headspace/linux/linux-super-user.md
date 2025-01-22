# LINUX SUDO SUPER USER

## Resources

- [SO pass env vars](https://unix.stackexchange.com/questions/202383/how-to-pass-environment-variable-to-sudo-su)

## Features
- `/etc/sudoers` contains config for super user
- sudoers config can provide fine-grained control to avoid needing to `sudo`

## Commands

### Edit sudoers file
`visudo`

### Change User - Keep Shell
`sudo su - myusername`

### switch to root
`sudo -i`
or
`sudo su`

### Run shell as another user
`su - ec2-user -c "/home/ec2-user/.nvm/install.sh"`

### Pass Environment Variables With Sudo

```console
export DUMMY=dummy
sudo -Eu bob bash -c 'echo $DUMMY'
```

## Config
exists at `/etc/sudoers`
should only be edited with `visudo`
additional files can be added to `/etc/sudoers.md/` instead of modifying base sudoers file

### File syntax
- Field 1: User or Group 
- Field 2: Hosts
- Field 3: User
- Field 4: Command

### Examples
groups begin with `%` as in `%admin`

```conf
# allow specific user to reboot
evan localhost=/usr/sbin/shutdown -r now
```

### Disallow root login
`grep -i ^root /etc/passwd`
should show:
`/root:x:0:0:root:/root:/usr/sbin/nologin`