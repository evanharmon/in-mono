# AWS EKS NODE NETWORKING

## Features
- node eni's are in your account of course
- cross-account eni's are in the AWS account of your controlplane
- node ENI's can have up to 10 IP addresses!!!

## Limitations
- # of IP's assigned to ENI depends on subnet, instance type, etc

## Best practices
- always set vpc-cni `ENABLE_PREFIX_DELEGATION` to true

## Cross-account ENI setup
Node has an ENI that takes up an IP address
communicates via it's ENI out to the controlplane to kube-apiserver

## Primary ENI
- provides the IP address for the node
