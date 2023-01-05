# AWS EKS NODES

## Resources

- [AWS EKS nodes](https://docs.aws.amazon.com/eks/latest/userguide/eks-compute.html)
- [AWS EKS managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html)

## Features

- standard EC2 instances
- use IAM roles
- supports launch templates

## Limitations

- cannot create managed nodes alongside regions with AWS Outposts, Wavelength, or Local Zones

## Common IAM Role Policies

commonly used policies on iam roles

- AmazonEKSWorkerNodePolicy
- AmazonEKS_CNI_Policy
- AmazonEC2ContainerRegistryReadOnly
