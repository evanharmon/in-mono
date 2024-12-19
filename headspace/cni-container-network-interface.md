# KUBERNETES CONTAINER NETWORK INTERFACE (CNI)

## Resources

- [Container Network Interface](https://www.cni.dev/)

## Features
CNI for common interface on networking and containers

Supported by plugins in tools like:
* kubernetes
* rkt
* mesos

## Default plugins
* bridge
* vlan
* ipvlan
* macvlan
* windows

* DHCP
* host-local

## Example third party plugins
* cilium
* weave
* flannel
* vmware NSX
* calico

## Limitations
Docker DOES NOT implement the CNI. Docker uses container network model (CNM)

## Networking Interface
declares things like:

* container runtime creates network namespace
* identifies network for container to attach to
* container runtime invokes Network Plugin (bridge) when container added
* container runtime invokes Network Plugin (bridge) when container deleted
* common JSON format for network config

## Plugin
* supports CLI args like ADD / DEL / CHECK
* supports params like container id / network namespace, etc
* manages IP address assignment to PODs
* returns results in correct JSON format