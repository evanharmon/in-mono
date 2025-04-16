# AWS EKS ADDON KARPENTER EC2 NODECLASS

## Features
- cluster scoped so not in a namespace

## Example

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