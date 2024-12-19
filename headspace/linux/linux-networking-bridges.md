# LINUX NETWORKING BRIDGES

## Features

- connects multiple virtual networking interfaces to a single network
- kernel-native and fast
- good for VMs / containers

## Commands

### Create a bridge
`ip link add name br0 type bridge`

### Add an interface to bridge
`ip link set dev eth0 master br0`

### Bring the bridge up
`ip link set dev br0 up`

### View bridge details
`bridge link`