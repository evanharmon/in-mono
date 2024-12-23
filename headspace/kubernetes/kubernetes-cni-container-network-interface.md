# KUBERNETES CONTAINER NETWORK INTERFACE (CNI)

## Resources

- [Kubenetes cluster networking](https://kubernetes.io/docs/concepts/cluster-administration/networking/)
- [Kubernetes network plugins](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/)
- [Container Network Interface](https://www.cni.dev/)

## Features
CNI for common interface on networking and containers
- agent is deployed to each node
- responsible for ip address management (IPAM) to avoid collisions

Supported by plugins in tools like:
* kubernetes
* rkt
* mesos

## Default plugins
plugins get installed to `/opt/cni/bin` and are used by container-runtime-interface (CRI)
config on how to use plugin is found at `/etc/cni/net.d/<plugin_name>.conflist`

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

## IP address management (IPAM)
CNI .conf file format has an IPAM section

example using host-local database

```json
{
  "cniVersion": "0.4.0",
  "name": "my-cni-network",
  "type": "bridge",
  "bridge": "cni0",
  "isGateway": true,
  "isDefaultGateway": true,
  "ipMasq": true,
  "ipam": {
    "type": "host-local",
    "ranges": [
      [
        {
          "subnet": "192.168.1.0/24",
          "rangeStart": "192.168.1.100",
          "rangeEnd": "192.168.1.200",
          "gateway": "192.168.1.1"
        }
      ]
    ],
    "routes": [
      {
        "dst": "0.0.0.0/0"
      }
    ]
  }
}
```