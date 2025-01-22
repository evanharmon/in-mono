## LINUX NETWORKING ARP

## Features
explore address resolution protocol (ARP).
Note: ARP CLI is considered deprecated - use `ip neigh` instead
- cli tool to show IP-to-MAC address mapping

## Commands

### Display arp cache / table
`arp -a`

### Add static ARP entry
`arp -s 192.168.1.10 00:11:22:33:44:55`
or
`arp -i enp0s3 -f 192.168.1.101 -M 00:11:22:33:44:56`

### Remove ARP entry
`arp -d 192.168.1.10`
or
`arp -i enp0s3 -d 192.168.1.100`