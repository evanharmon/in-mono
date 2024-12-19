# LINUX NETWORKING IP NEIGH

## Features
replaces deprecated `arp` CLI

## Commands

### View ARP table
`ip neigh show`

### Add static ARP entry
`ip neigh add 192.168.1.10 lladdr 00:11:22:33:44:55 dev eth0`

### Remove ARP entry
`ip neigh del 192.168.1.10 dev eth0`