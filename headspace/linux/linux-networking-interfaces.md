# LINUX NETWORKING INTERFACES

## Features
- located at /etc/network/interfaces
- `ip link` is to list and modify network interfaces on host
- `ip addr` is to list and modify IP addresses assigned to interfaces

## Limitations

- `ip` command changes don't survive on reboots - edit etc/network/interfaces to persist.

## Packet forwarding
by default, packets are not forwarded from one interface to the next (ex eth0 to eth1).
This is for security reasons, otherwise the public network could send messages to private network.

## Commands

### Check packet forwarding setting

`cat /proc/sys/net/ipv4/ip_forward`

### Turn on packet forwarding

`echo 1 > /proc/sys/net/ipv4/ip_forward`

to persist packet forwarding edit `/etc/sysctl.conf`

`net.ipv4.ip_forward = 1`

### List network interfaces
`ip link`

### List all network interfaces with ip configuration
`ip a`

### Bring down a network interface
`ip -n red link set veth-red down`

### Bring up a network interface
`ip -n red link set veth-red up`

### Assign interface IP address
CIDR Block determines Submask
`ip addr add 192.168.0.150/24 dev eth0`

### Add additional local loopback ip address
`ip address add 127.0.0.2/8 dev lo`

### Automatically bring up interface on startup
in /etc/network/interfaces
`auto lo`

### Use DHCP for interface
`iface en0 inet dhcp`

### Enable wifi and set ssid / password
`chmod 0600 /etc/network/interfaces`
wpa_passphrase ssid password
`vi /etc/network/interfaces` # change ssid and wpa-psk

### Check IP ports
`ip addr`
`netstat -an | grep '<port_number>'

### Add a loopback alias
`ip address add 127.0.0.2/8 dev lo`

### Remove an alias
`ip address del 127.0.0.2/8 dev lo`

### Show loopback aliases
`ip address show lo`

### Show bridge interfaces
`ip link show type bridge`