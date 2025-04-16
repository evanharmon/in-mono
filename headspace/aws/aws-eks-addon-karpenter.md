# AWS EKS ADDON KARPENTER

## Resources
- [AWS EKS karpenter docs](https://docs.aws.amazon.com/eks/latest/best-practices/karpenter.html)
- [EKS blueprint karpenter addon](https://aws-quickstart.github.io/cdk-eks-blueprints/addons/karpenter/#:~:text=Karpenter%20add%2Don%20is%20based,application%20on%20your%20EKS%20cluster.)
- [AWS EKS karpenter best practices](https://docs.aws.amazon.com/eks/latest/best-practices/karpenter.html)
- [Karpenter FAQs](https://karpenter.sh/docs/faq/)
- [Karpenter cloud cost optimization workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/f6b4587e-b8a5-4a43-be87-26bd85a70aba/en-US/050-karpenter)

## Features
efficient and cost-effective way to manage workloads by launching just the right compute resources to handle a cluster's application on your EKS cluster
(Workload native node scheduling based on workload reqs)
- watches for pods that kube scheduler marks as unschedulable
- evaluates scheduling constraints requested by pods
- provisions nodes that meet requirements of pods
- schedules pods to run on new nodes
- removes nodes that are no longer needed
- finds the best node for the workload requirements
- knows about the price of compute
- automated cost and resource optimization
- supports custom user data in EC2NodeClass
- supports node consolidation
- uses EventBridge / SQS queue to handle EC2 lifecycle
- listens to cloudwatch EC2 event rules that go to SQS queue

## Limitations
- CANNOT be used alongside Cluster Autoscaler
- to use with spot, create EC2 spot service linked role
- no custom launch template support

## Best practices
never run karpenter on a node managed by Karpenter!!

not doing the below can lead to an outage where a pod was scheduled but can't be re-scheduled!?
- enforce use of PodDisruptionBudgets
- enforce use of Topology spreads
- enforce use of resource request / limits

- run karpenter controller on EKS Fargate or a worker node in a dediated managed node group
- can be a one small node group with at least one worker node

- exclude instance types that do not fit your workload
- enable interruption handling when using Spot

## IAM role
permissions to provision and manage EC2 instances, etc
this is the role tied to IRSA IAM roles for service accounts

## Node IAM role
grants EC2 instances (nodes) permissions to interact with AWS services

## EC2NodeClass
associated with NodePools

## NodePools
uses to set constraints on nodes the pods that can run on them
multiple NodePools can be assigned to same EC2NodeClass

these are still needed to prevent metal instances, GPU instances, etc.


only support nitro-instances
```yaml
apiVersion: karpenter.sh/v1
kind: NodePool
...
spec:
  template:
    spec:
      requirements:
        - key: karpenter.k8s.aws/instance-hypervisor
          operator: In
          values:
            - nitro
```

## Coredns setup for before karpenter starts up
terraform example
```conf
configuration_values = jsonencode({
  tolerations = [
    # Allow CoreDNS to run on the same nodes as the Karpenter controller
    # for use during cluster creation when Karpenter nodes do not yet exist
    {
      key    = "karpenter.sh/controller"
      value  = "true"
      effect = "NoSchedule"
    }
  ]
})
```

## Labels

### Nodes
node label for karpenter nodes
```conf
labels = {
  # Ensure karpenter only runs on nodes it does not manage
  "karpenter.sh/controller" = "true"
}
```

### Subnets
tag private subnets for karpenter auto-discovery

```conf
private_subnet_tags = {
  "kubernetes.io/role/internal-elb" = 1
  # Tags subnets for Karpenter auto-discovery
  "karpenter.sh/discovery" = local.name
}
```

## Ignore specific instance types

```yaml
- key: node.kubernetes.io/instance-type
  operator: NotIn
  values:
  - m6g.16xlarge
  - m6gd.16xlarge
  - r6g.16xlarge
  - r6gd.16xlarge
  - c6g.16xlarge
```