# AWS EKS FARGATE

## Resources
- [AWS EKS fargate considerations](https://docs.aws.amazon.com/eks/latest/userguide/fargate.html)

## Features
serverless pods on EKS with their own isolation bounday
- supports karpenter
- each pod isolated within its own VM
- supports VPC CNI plugin
- pods run on private subnets

## Limitations
there a LOT - see fargate considerations link above
- no daemonsets, have to run them as sidecars
- all addons run on EVERY fargate node
- IMDS not available to pods on fargate - use IRSA
- does not support alternate CNI's - just vpc cni
- cannot run in public subnets
- requires dns resolution and dns hostnames turned on in VPC DHCP options
