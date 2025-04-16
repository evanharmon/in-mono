# AWS EKS ADDON COREDNS

## Resources
- [AWS EKS manage coredns](https://docs.aws.amazon.com/eks/latest/userguide/managing-coredns.html)

## Features
- deploys with PodDisruptionBudget as EKS managed add on
- sets a default `topologySpreadConstraint` to spread across AZs

## Limitations
- hard limit of 1024 packets per secodn on ENI

## Best practices
- monitor for hitting limit of 1024 packets per second on ENI

## 