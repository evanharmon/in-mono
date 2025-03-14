# LINUX SYSTEMD SERVICES TYPES

## Forking
useful to run svc in background and continue after parent process has terminated

```conf
# my_service.service
[Unit]
Description=My Service
After/network.target

[Service]
Type=forking
ExecStart=/usr/bin/my_service_binary --start
ExecStop=/usr/bin/my_service_binary --stop
Restart=always
KillMode=pidfile

[Install]
WantedBy=multi-user.target
```