# AWS EKS EBS CSI

## Features
CSI for ebs on EKS
- kubelet will talk to EBS
- controller manages lifecycle of volumes
- controller runs as daemonset deployment

## Limitations
remember EBS is an AZ bound service
- autoscaler needs to be sure to pick volumes from the right AZs!!

## Common issues

### Autoscaler keeps spawning nodes
if the cluster autoscaler isn't handling EBS volumes by AZ correctly,
it will create new nodes, in random AZ's, until it creates a node in an AZ with
an appropriate EBS volume.
Expensive!
