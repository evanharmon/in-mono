# LINUX NETWORKING NAMESPACES

## Resources

- [Linux networking namespaces man pages](https://man7.org/linux/man-pages/man7/network_namespaces.7.html)

## Features
used for networking isolation.

- host has visibility in to all network devices in namespaces
- container can have it's own virtual network interfaces

## Commands

### Create new networking namespace
`ip netns add red`
`ip netns add blue`

### List networking namespaces
`ip netns`

### List namespace interfaces from host
prefix with namespace. `exec` works for other commands like `neigh`, `arp`, etc.
`ip netns exec red ip link` or if ONLY running an ip command: `ip -n red link`

### Check routing for a namespace
`ip netns exec blue route`

### Delete virtual cable (link) for a namespace
other end connection gets severed as well
`ip -n red link del veth-red`

## Examples
### Link (PIPE) two namespaces for communication
create link:
`ip link add veth-red type veth peer name veth-blue`

attach virtual interface to each namespace:
`ip link set veth-red netns red`
`ip link set veth-blue netns blue`

assign IPs:
```sh
ip -n red addr add 192.168.15.1 dev veth-red
ip -n blue addr add 192.168.15.2 dev veth-blue
# may have to set NETMASK
ip -n red addr add 192.168.1.10/24 dev veth-red
ip -n blue addr add 192.168.1.10/24 dev veth-blue
```

bring up devices:
`ip -n red link set veth-red up`
`ip -n blue link set veth-blue up`

confirm connectivity via ping:
`ip netns exec red ping 192.168.15.2`
`ip netns exec blue ping 192.168.15.1`

and via ARP:
`ip netns exec red neigh`
`ip netns exec blue neigh`

## Create virtual network for communication between all namespaces
multiple options: `linux bridge` or third-party like `Open vSwitch`

create virtual switch (another interface):
`ip link add v-net-0 type bridge`
`ip link set dev v-net-0 up`

create link from namespaces for virtual switch:
think of them as virtual cables
`ip link add veth-red type veth peer name veth-red-br`
`ip link add veth-blue type veth peer name veth-blue-br`

connect namespaces to virtual switch:
```sh
ip link set veth-red netns red
ip link set veth-red-br master v-net-0

ip link set veth-blue netns blue
ip link set veth-blue-br master v-net-0
```

assign IPs:
`ip -n red addr add 192.168.15.1 dev veth-red`
`ip -n blue addr add 192.168.15.2 dev veth-blue`

bring up devices:
`ip -n red link set veth-red up`
`ip -n blue link set veth-blue up`

### Connect host to bridge for namespaces communication
`ip addr add 192.168.15.5/24 dev v-net-0`

### Use host namespace connection as gateway
works because host has to addresses: bridge and external network
requires NAT - masquerading

```sh
iptables -t nat -A POSTROUTING -s 192.168.15.0/24 -j MASQUERADE
ip netns exec blue \
  ip route add 192.168.1.0/24 via 192.168.15.5
```

to be able to access internet - add default gateway in each namespace to host

```sh
ip netns exec red ip route add default via 192.168.15.5
ip netns exec blue ip route add default via 192.168.15.5

# confirm connectivity to world
ip netns exec red ping 8.8.8.8
```

if you want namespace reachable from outside initiated connections:

```sh
ip tables -t nat -A PREROUTING --dport 80 --to-destination 192.168.15.2:80 -j D`
```