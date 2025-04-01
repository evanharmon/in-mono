# AWS EKS AUTOMODE

## Resources
- [AWS EKS auto mode](https://docs.aws.amazon.com/eks/latest/userguide/automode.html)
- [Karpenter](https://karpenter.sh/docs/)

## Features
extends AWS management of kubernetes clusters beyond the cluster itself
- worker nodes are scaled up / down automatically

AWS manages the components:
- karpenter
- AWS load balancer controller
- EBS CSI

## Identity and access management
No need to install EKS Pod Identity Agent - automode handles this for you

## Application Availability
dynamically adds or removes nodes based on demands of kubernetes applications.
reduces need for manual capacity planning while ensuring availability
Uses Karpenter for auto-scaling

## Efficiency
optimizes compute costs by terminating unused instances and consoliating workloads
- respects NodePool and workload requirements

## Security
AMIs that are immutable for nodes
- locked-down software
- enabled SELinux mandatory access controls
- read-only FS
- max lifetime of 21 days for nodes, which can be reduced

## Automated upgrades
auto updates cluster, nodes, and components up to latest patches
- respects Pod Disruption Budgets (PDBs)
- respects Node Disruption Budgets (NDBs)

downside is can require intervention if pod / nodes can't terminate

## Managed components
includes kubernetes / AWS cloud features as core components instead of managing add-ons

supports:
- Pod IP address assignments
- Pod network policies
- local DNS services
- GPU plug-ins
- health checkers
- EBS CSI storage

## Configuration

### Daemonsets
kubernetes daemonsets can be used to run specific software on every node

### Customizable NodePools and NodeClasses
supports creating new custom NodePools and NodeClasses
- selecting specific instance types
- isolating workloads
- configuring specific ephemeral storage settings like IOPs, size, throughput

### Load Balancing
can be configured directly as kubernetes objects?