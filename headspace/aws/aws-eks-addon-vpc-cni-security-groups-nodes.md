# AWS EKS ADDON VPC CNI SECURITY GROUPS

## Resources
- [EKS VPC CNI security groups per pod](https://docs.aws.amazon.com/eks/latest/best-practices/sgpp.html)
- [EKS VPC CNI security groups for pods](https://docs.aws.amazon.com/eks/latest/userguide/security-groups-for-pods.html)

## Features
default: every ENI associated with instance will have same security groups.
so every pod on node shares the same security group as the node.

## Security groups for pods
offers additional network segmentation on pod level.

supports:
- Pod-to-Pod
- Pod-to-External AWS Services
- reuse of existing SGs

example: give a single pod access to RDS

enable by setting `ENABLE_POD_ENI=true` on vpc cni config
then the vpc resource controller in controlplane attaches a `aws-k8s-trunk-eni`
to worker node. Creates `aws-k8s-branch-eni` as well.

requires `AmazonEKSVPCResourceController` managed policy on EKS cluster role

### Assigning pod security group
uses SecurityGroupPolicy crd
- associates with the `aws-k8s-branch-eni`

### Limitations
- additive to existing instance type limits for secondary IP addresses
- pods using sgs are not accounted for in max-pods formula
- may need to raise max-pods value

custom networking:
- sg for pods is used rather than SG specified in ENIConfig - so carefully assess!
