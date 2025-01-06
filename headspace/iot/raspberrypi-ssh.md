# RASPBERRY PI SSH

## Mac over Ethernet
Go in to `Internet Sharing` and turn on sharing for the USB ethernet device.

from the terminal run `netstat -rn -finet` and you'll see the `bridge100` network
ip address listed is the mac's ip on the bridge.

on the raspberry pi, get the IP address and user:

```sh
hostname -I
users
```

then try ssh: `ssh evan@192.168.2.5`

## Get ip addr on mac bridge
`arp -a`