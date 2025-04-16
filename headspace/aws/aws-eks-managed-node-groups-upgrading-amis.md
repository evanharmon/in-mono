# AWS EKS MANAGED NODE GROUPS UPGRADING AMIS

## Resources
- [AWS EKS managed node group update behavior details](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-update-behavior.html)
- [EKS blueprint MNG upgrading AMIs](https://www.eksworkshop.com/docs/fundamentals/managed-node-groups/basics/upgrades/)

## Features
AWS handled upgrading AMI and rolling out new nodes and rescheduling pods

upgrade phases:
- setup
- scale up
- upgrade
- scale down

## Limitations

### Churn
lots of churn as pods can be deleted 4-5 times through the processing across nodes
- pods will be re-scheduled on old nodes
- pods will may get re-scheduled again as old node is rolled
- pods finally end up on a new node

## Phases
these are the general steps from blueprint doc - AWS doc has WAY more detail

### Setup
- create new EC2 launch template with ASG set to latest AMI
- point ASG to use latest version of launch template
- determine max # of nodes to upgrade in parallel using `updateconfig` prop

### Scale up
- during upgrade, upgrade nodes launched in same AZ as those being upgraded
- increments ASG max size and desired size to support additional nodes
- after scalling ASG, checks if nodes using latest config are present in node group
- applies a `eks.amazonaws.com/nodegroup=unschedule:NoSchedule` taint on every node in nodegroup without the latest labels. Prevents nodes that have already been updated from a previous failed update from being tainted

### Upgrade
- randomly selects a node and drains Pods from node
- cordons the node after every Pod is evicted and waits for 60 seconds
- sends a termination request to ASG for cordoned node
- applies same across all nodes in MNG making sure no nodes with older version

### Scale down
- scale down phase decrements ASG max size and desired size by one until values are same as before update started
