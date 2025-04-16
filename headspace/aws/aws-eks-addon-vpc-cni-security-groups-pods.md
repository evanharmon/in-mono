# AWS EKS ADDON VPC CNI SECURITY GROUPS FOR PODS

## Resources
- [EKS VPC CNI security groups per pod](https://docs.aws.amazon.com/eks/latest/best-practices/sgpp.html)
- [EKS VPC CNI security groups for pods](https://docs.aws.amazon.com/eks/latest/userguide/security-groups-for-pods.html)

## Note on nodes
default: every ENI associated with instance will have same security groups.
so every pod on node shares the same security group as the node.

## Features
offers additional network segmentation on pod level.

supports:
- Pod-to-Pod
- Pod-to-External AWS Services
- reuse of existing SGs

example: give a single pod access to RDS

## Limitations
- additive to existing instance type limits for secondary IP addresses
- pods using sgs are not accounted for in max-pods formula
- may need to raise max-pods value
- requires nitro based instances
- pods assigned with SGs MUST be on private subnet nodes or can't access internet
- not all instance types support trunk ports to talk to controlplane EKS

custom networking:
- sg for pods is used rather than SG specified in ENIConfig - so carefully assess!

## Best practices
DON'T use this unless you absolutely have to for a specific reason

## Alternatives
use pod identity and network policies instead where possible

with karpenter, create separate NodeClasses, so those Node's have their own SG.
Then that SG can allow traffic to RDS on the node level

## Enforcing mode STRICT
use strict mode to isolate pod and node traffic:

`POD_SECURITY_GROUP_ENFORCING_MODE=strict` is default
- only branch ENI SGs are enforced (not node SG)
- source NAT is disabled
- traffic between pods on same node will go over VPC
- NodeLocal DNSCache not supported

## Enforcing mode STANDARD
- both primary ENI SG (node) and branch ENI (pod) are applied

### Use cases for standard mode

Client source IP visible to container in POD
use with instance targets with `externalTrafficPolicy=local` 
- avoids second hop for LoadBalancer and NodePort type services

Deploying NodeLocal DNSCache
- improves Cluster DNS performance by running DNS caching agent on cluster nodes as DS
- improves latency as pods query local kube-dns/CoreDNS as local cache

Supporting Kubernetes Network Policies
- recommended when using pods with associated security groups AND using external AWS services

## Enable by setting `ENABLE_POD_ENI=true` on vpc cni config
then the vpc resource controller in controlplane attaches a `aws-k8s-trunk-eni`
to worker node. Creates `aws-k8s-branch-eni` as well.

also sets 

requires `AmazonEKSVPCResourceController` managed policy on EKS cluster role

## Assigning pod security group
uses SecurityGroupPolicy crd
- associates with the `aws-k8s-branch-eni`

## Loadbalancer Controller
tag sg with `kubernetes.io/cluster/$name`
- allows the controller to update the rules of the SG to route traffic to pods