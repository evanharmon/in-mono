# LINUX SYSTEMD SERVICES

## Features
- service can start multiple processes, or the process can start sub processes

## Commands

### Help / man pages
check the following man pages

```bash
man systemd.service
man systemd.unit
man systemd.exec
man systemd.kill
```

### List services running
`service --status-all`

### Check if service is running
`service httpd --status`

## Service files

required sections:
- unit
- service
- install

### Unit section
specify dependencies
```
[Unit]
Description=Python django for my project
After=postgresql.service
```

### Service section
- `ExecStart` - run command
- `User` - service account

```
[Service]
ExecStart=/usr/bin/python3 app.py
User=my-project
WorkingDirectory=/opt/myapp
Restart=on-failure
RestartSec=10
```

### Install section
```
[Install]
WantedBy=graphical.target
```
run during boot

### Simple script example
this is the minimum to run a service
/etc/systemd/system/my-project.service
```
[Service]
ExecStart=/bin/bash /usr/bin/my-project.sh
```

start service with sudo to run as root:
`sudo systemctl start my-project.service`

### Script service with more options
/etc/systemd/system/my-project.service
```
[Unit]
Description=Python django for my project
After=postgresql.service

[Service]
ExecStart=/bin/bash /usr/bin/my-project.sh
User=my-project
Restart=on-failure
RestartSec = 10

[Install]
WantedBy=graphical.target
```

## Steps to add a service

### Create service file
1. `sudo touch /etc/systemd/system/myapp.service`
2. `sudo vi /etc/sytemd/system/myapp.service`
example python service:
```
[Unit]
Description=This is my app service
ExecStart=/usr/bin/python3 myapp.py
Restart=on-failure
WorkingDirectory=/opt/myapp
User=app

[Install]
WantedBy multi-user.target
```

### Enable and start service

```bash
sudo systemctl enable --now myapp.service
sudo systemctl start myapp.service
# if errors check status
sudo systemctl status myapp.service
```