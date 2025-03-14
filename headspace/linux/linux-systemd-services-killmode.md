# LINUX SYSTEMD SERVICES KILLMODE

## Process
kill only process
```conf
[Service]
KillMode=process
# Optional process matcher
KillProcess=/usr/bin/my_service_binary
```

## Control-group (cgroup)
kill all processes created by the service via cgroup
```conf
[Service]
KillMode=control-group
ControlGroup=/system.slice/my_service.service
```

## Parent
kill parent process and WAIT for children to finish
```conf
[Service]
KillMode=parent
```