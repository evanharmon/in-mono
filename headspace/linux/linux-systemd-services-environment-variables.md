# LINUX SYSTEMD SERVICES ENVIRONMENT VARIABLES

## Load environment variables from file
```conf
# my-service.service
[Unit]
Description=My Service
After/network.target

[Service]
EnvironmentFile=-/etc/my_service/env.conf
ExecStart=/usr/bin/python /path/to/my/service.py
Restart=always

[Install]
WantedBy=multi-user.target
```
