# AWS EKS CLUSTER UPGRADES

## Resources
- [AWS EKS cluster upgrade docs](https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html)
- [AWS EKS cluster upgrades best practices](https://docs.aws.amazon.com/eks/latest/best-practices/cluster-upgrades.html)
- [Kubent kube no trouble](https://github.com/doitintl/kube-no-trouble)

## Features
- extended support is available but SUPER expensive
- eventually, a cluster CAN be force upgraded on extended support
- use ClusterInsights to check for breaking changes / upgrade potential issues

## Best practices
- prefer in-place upgrades over blue / green full cluster switchover
- use as few managed addons as possible as you'll run in to missing supported versions on upgrades!
- blue / green is acceptable for big cluster changes like changing CNI, etc.

## Upgrade process

FIRST - check what is changing / breaking in new kube version
try tools like EKS cluster insights and `kubent` kube-no-trouble to check API deprecations

### Controlplane
**NOTE**: controlplane components are HA and behind loadbalancers
AWS EKS manages this upgrade as it's a managed service

1. **New components**
- EKS launches new controlplane components with the updated version
- once components are healthy, LB starts routing traffic to new versions

2. **Cutover**
- once successful, EKS switches entirely over to new versions of components
- old versions are taken down

controlplane is now on a different version of kubernetes than the dataplane

### Dataplane
This is the customer's responsibility to upgrade successfully.

Many more potential components at play:
- Node Groups
- Karpenter / nodes
- Fargate
- Add ons / helm charts
- custom controllers / operators / schedulers

1. **Add Ons / Helm charts**
have to be upgraded BEFORE nodes roll?
- upgrade API call PER addon
- or deploy of new helm release

2. **Node groups** 
by default: node groups upgrade one node at a time, but that can be changed

node groups are re-deployed with a newer AMI with the new kubernetes version
- rolling replacement of nodes until all nodes are new version
- not really a full blue / green swap, just roll

3. **Karpenter**
by default: karpenter only updates one node at a time but can be changed

Karpenter has more intelligence and is watching:
- controlplane / kube version
- nodeclass (AMI, etc)

with consolidation - new nodes may already start coming up with newer AMI / kube version

4. **Fargate**
have to force a re-deployment / new deployment
can be slow as each deployment has to roll out and be triggered...

## Challenges

### Why blue / green is difficult
outside of the cluster, AWS resources exist like:
- AWS load balancers
- Route53 / DNS cache

- each team / manager has to confirm workloads are running correctly in new cluster
- double the cost as duplicate resources exist...
