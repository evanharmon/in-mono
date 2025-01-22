# Linux Run Levels

## Old runlevels from sysV INIT
0 - Halt or shut down system
1 - Single user mode
2 - Multi-user mode without networking
3 - Normal boot (non-graphical / cli)
4 - Unused/customizable
5 - Run Level 3 + GUI display manager
6 - Reboot

## Modern Systemd Targets
runlevel are known as targets

0 - poweroff.target
1 - rescue.target
2 - multi-user.target
3 - multi-user.target
4 - multi-user.target
5 - graphical.target
6 - reboot.target

### Check run level
note: runlevel is now replaced with systemctl
`runlevel`
or `systemctl get-default`

### Change run level / target
`systemctl set-default multi-user.target`

### Old Run Level Script Directories
contains a lot of kill scripts as well
```
/etc/
rc0.d
rc1.d
rc2.d
rc3.d
rc4.d
rc5.d
rc6.d
rcS.d
```
`rcS.d` run on every run level
