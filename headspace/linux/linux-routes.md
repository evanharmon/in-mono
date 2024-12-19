# LINUX ROUTES

## Limitations

- remember the routes need to exist on EACH system

## Commands

### List routes

`ip route`

### Add default gateway
routing to external networks

`ip route add default via 192.168.1.1 dev eth0`

same as: `ip route add 0.0.0.0 via dev eth0`

### Add static route
Configure a gateway to reach another network

`ip route add 192.168.2.0/24 via 192.168.1.1`

### Example setup with internal / external routers

```sh
ip route add 192.168.1.0/24 via 192.168.2.2
ip route add default via 192.168.1.1 dev eth0
```

### Delete a route

`ip route del 192.68.1.0/24`

### List IP routing without resolves

`ip route show`

### Add policy based routing
```sh
ip rule add from 192.168.2.0/24 table 200`
ip rule add default via 192.168.2.1 table 200`
```

### Edit resolve routes

`vi /etc/resolv.conf`
