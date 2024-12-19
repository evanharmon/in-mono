## LINUX NETWORKING ARP

## Features
explore address resolution protocol (ARP).
Note: ARP CLI is considered deprecated - use `ip neigh` instead

## Commands

### View ARP table
`arp -a`

### Add static ARP entry
`arp -s 192.168.1.10 00:11:22:33:44:55`

### Remove ARP entry
`arp -d 192.168.1.10`