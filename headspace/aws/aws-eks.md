# AWS EKS

## Resources

- [AWS EKS Getting Started Console](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html)
- [AWS EKS IAM AUTHENTICATOR](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html)
- [AWS EKS terraform blueprints](https://aws-ia.github.io/terraform-aws-eks-blueprints/)

## Features
AWS managed kubernetes
- AWS manages the controlplane

## Limitations
- IPv6 (dual-stack) can only be enabled at cluster creation

## Server-side apply
- only turned on by default for add-ons

## Auto generated resources

### Cluster security group
allows unfettered communication between the EKS control plane and the nodes from managed node groups
creating this default cluster SG can be turned off on creation

## EKS cluster creation via console

Important on security / initial login on public access. It's limited to
IAM user / role used to create cluster on console

```
When an Amazon EKS cluster is created, the IAM entity (user or role) that
creates the cluster is added to the Kubernetes RBAC authorization table as the
administrator (with system:master permissions. Initially, only that IAM user can
make calls to the Kubernetes API server using kubectl.
```
