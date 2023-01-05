# AWS EKS EKSCTL CLI

## Resources

- [AWS EKS eksctl cli](https://eksctl.io/)

## Create Nodegroup

```console
aws eksctl create nodegroup \
  --cluster "$CLUSTER_NAME" \
  --version auto \
  --name standard-workers \
  --node-type t3.medium \
  --node-ami auto \
  --nodes 1 \
  --nodes-min 1 \
  --nodes-max 4
```
