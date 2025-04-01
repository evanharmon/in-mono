# AWS EKS BEST PRACTICES

## Resources
- [AWS EKS best practices](https://docs.aws.amazon.com/eks/latest/best-practices/introduction.html)

## Sections
- security
- cluster autoscaling
- reliability
- networking
- scalability
- cluster upgrades
- cost optimization
- windows
- hybrid

## Features
long list but in one place for easier reference

## VPC
- create vpc's as dual-stack whenever possible! then the EKS will need to be created with IPv6 enabled
- ipv4: public / private vpc subnets at least `/19`
- `enableDnsHostNames` and `enableDnsSupport` must be true to use EKS cluster private endpoint

## VPC CNI
- config: enable env `ENABLE_PREFIX_DELEGATION: "true"`
- config: enable `enable-network-policy-controller: "true"`

## Cross-VPC access to EKS

1. **AWS PrivateLink**
best security / performance
- create privatelink in EKS VPC, expose EKS services via NLB
- things like lambda, etc connect via PrivateLink

2. **Transit Gateway**
- attach both EKS VPC and other VPC to transit gateway

3. **VPC Peering**
if transitive not needed and only 1/2 VPC's, this is a simple solution

## Pod security group associations
- use `POD_SECURITY_GROUP_ENFORCING_MODE=standard` with pods associated with SGs
- use `POD_SECURITY_GROUP_ENFORCING_MODE=standard` 
- use dedicated subnets for pods? (double check this)

## IPv6
- if using IPv6 - ensure most of supporting infrastructure supports it as well!!
- use an egress-only gateway to ensure IPv6 addresses aren't publicly accessible
- requires larger nodes

## SECURITY
- disable auto provisioning access entry for IAM role creating EKS cluster
- use network policies to manage access between pods
- use pod identities instead of iam roles for service accounts (IRSA) unless you have a specific use case
- use IRSA / OIDC sts for things like EBS CSI? Teleport cloud?

## Addons
? not sure about this
- use managed EKS add-ons

## Use `hardeneks` cli tool to check compliance
