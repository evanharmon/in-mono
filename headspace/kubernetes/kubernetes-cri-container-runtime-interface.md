# Kubernetes Container Runtime Interface (CRI)

## Resources
- [Kubernetes CRI](https://kubernetes.io/docs/concepts/architecture/cri/)

## Features
Inteface for using a variety of container runtimes with kubernetes.
Adheres to Open Container Initiative (OCI)

- leverages imagespec and runtimespec

## Networking
* CRI looks at `/etc/cni/net.d/<cni_plugin>.conflist`

on pod creation / deletion runs necessary commands from:
* `/opt/cni/bin/`
