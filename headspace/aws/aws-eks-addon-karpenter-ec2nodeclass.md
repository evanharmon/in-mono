# AWS EKS ADDON KARPENTER EC2 NODECLASS

## Features
- cluster scoped so not in a namespace

## Examples

### Basic bottlerocket
```yaml
---
apiVersion: karpenter.k8s.aws/v1
kind: EC2NodeClass
metadata:
  name: default
spec:
  amiSelectorTerms:
    - alias: bottlerocket@latest
  role: ex-karpenter-mng
  subnetSelectorTerms:
    - tags:
        karpenter.sh/discovery: ex-karpenter-mng
  securityGroupSelectorTerms:
    - tags:
        karpenter.sh/discovery: ex-karpenter-mng
  tags:
    karpenter.sh/discovery: ex-karpenter-mng
```

### EKS Automode
```yaml
apiVersion: eks.amazonaws.com/v1
kind: NodeClass
metadata:
  annotations:
    eks.amazonaws.com/nodeclass-hash: "15041926142959596202"
    eks.amazonaws.com/nodeclass-hash-version: v2
  creationTimestamp: "2025-04-26T21:03:06Z"
  finalizers:
  - eks.amazonaws.com/termination
  generation: 1
  labels:
    app.kubernetes.io/managed-by: eks
  name: default
  resourceVersion: "38581"
  uid: a358bb55-7127-4cac-8690-1d4839082e84
spec:
  ephemeralStorage:
    iops: 3000
    size: 80Gi
    throughput: 125
  networkPolicy: DefaultAllow
  networkPolicyEventLogs: Disabled
  role: eks-ipv6-auto-us-east-1-node-20250426201646240500000002
  securityGroupSelectorTerms:
  - id: sg-01ccba2dbf4fd3938
  snatPolicy: Random
  subnetSelectorTerms:
  - id: subnet-06c0d3aa272fbc269
  - id: subnet-09681b404eb862dd8
```
