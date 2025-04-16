# KUBERNETES POD NETWORKING

## Requirements
Kubernetes networking model expects:
- each pod gets it's own cluster-private IP address
- all pods to be able to communicate with each other on the same node over the pod IP address
- all pods on a node can communicate with pods on other notes without NAT using the pod IP address

## Check pod routes
a pod can have multiple bridge networks, fyi

`kubectl exec temp --busybox -- ip route`

## Containers
containers can communicate with each other over exposed ports on `localhost`
this works bc of the loopback interface.
all containers in a pod share the same network namespace and IP address
