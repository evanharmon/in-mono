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

## Best Practices
long list but in one place for easier reference

## High availability across a region
controlplane only gets TWO ENI's in separate AZ
so even though you should do three AZs, remember your fault tolerance is max ONE AZ going down if it's one of the TWO eni's

## VPC
- create vpc's as dual-stack whenever possible! then the EKS will need to be created with IPv6 enabled
- ipv4: public / private vpc subnets at least `/19`
- `enableDnsHostNames` and `enableDnsSupport` must be true to use EKS cluster private endpoint
- use AZ `zone id` instead of name to ensure using same physical location across AWS accounts

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
shouldn't be using this unless you ABSOLUTELY have to.
use pod identity and network policies instead where possible
- use `POD_SECURITY_GROUP_ENFORCING_MODE=standard` with pods associated with SGs
- use dedicated subnets for pods? (double check this)

## IPv6
- if using IPv6 - ensure most of supporting infrastructure supports it as well!!
- use an egress-only gateway to ensure IPv6 addresses aren't publicly accessible
- requires larger nodes

## SECURITY
- disable auto provisioning access entry for IAM role creating EKS cluster
- use network policies to manage access between pods
- use IMDSv2 only so IRSA / EKS pod identity don't inherit role assigned to woreker noder
- use eks pod identities elsewhere to avoid limitations
- don't leave role generating EKS cluster as full admin, add additional role(s) via access entries
- use dedicated serviceaccount for each application (tricky with blue / green though)
- run apps as non-root user

## Roles
- use iam roles for service accounts (IRSA) / OIDC where necessary
- use dedicated IAM role to create EKS clusters
- use ONE IAM role per application for isolation

## KMS Keys
- manage separate keys per region or use multi-region keys for governance

## Pod identities
- use `"aws:SourceOrgId": "${aws:ResourceOrgId}"` string condition to limit within org for trust policy

IAM policies:
- scope down conditions to to exact service account, namespace, and EKS cluster arn

## Secrets
- use an external secret store and CSI driver
- for best security, use aws SDK's in app so secrets are only in memory

## Services network config

### service_ipv4_cidr
- defaults to `10.100.0.0/16` or `172.20.0.0/16` 
- CANNOT be changed after creation
- should not overlap with resources in other peered networks / resources in VPC

## Logging

### Cloudwatch
log group name must be in the below format and match EKS cluster name
basically a well-known resource. :oof:
`/aws/eks/{cluster_name}/cluster`

EKS will create it with a FOREVER retention period
so better to create it yourself, with a KMS key and encryption

## Addons
- DONT use managed EKS add-ons - per kodekloud EKS ex AWS employee
- addon marketplace likely won't have newest versions
- for upgrades, have to upgrade them BEFORE new nodes roll out?

### VPC CNI
- config: enable env `ENABLE_PREFIX_DELEGATION: "true"`
- config: enable `enable-network-policy-controller: "true"`
- use IRSA with new created `aws-node` IAM role
- assign AmazonEKS_CNI_Policy and/or IPV6 equivalent to separate role instead of Node IAM role

### Load balancer controller
aws-loadbalancer-controller only can have ONE SG with this tag attached to nodes
- only supports a SINGLE Node SG having the `kubernetes.io/cluster/$CLUSTER_NAME` tag
- with IMDSv2, set hop limit to 2 or higher

### Karpenter addon
- never run karpenter on a node managed by Karpenter!!
- enable interruption handling when using Spot
- run karpenter controller on EKS Fargate or a worker node in a node group
- exclude instance types that do not fit your workload

enforce that all workloads have the below:
- PodDisruptionBudgets
- Topology spreads
- resource request / limits

# TODO: double check this.. i'm pretty sure i've worked in accounts with multiple SGs like this without issues
- ONLY ONE security group in account should be tagged with `karpenter.sh/discovery`

## Auto Mode

- create single `AmazonEKSAutoClusterRole` and `AmazonEKSAutoNodeRole` per account
- name custom security groups with convention `eks-cluster-sg-` to avoid needing addtl cluster role perms

## Tooling

### Use `hardeneks` cli tool to check compliance
