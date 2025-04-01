# AWS EKS ADDON VPC CNI

## Resources

- [AWS EKS best practices networking vpc cni](https://aws.github.io/aws-eks-best-practices/networking/vpc-cni/)
- [AWS EKS custom networking tutorial](https://docs.aws.amazon.com/eks/latest/userguide/cni-custom-network.html)
- [AWS EKS vpc cni networking policy config setup blog](https://aws.amazon.com/blogs/containers/amazon-vpc-cni-now-supports-kubernetes-network-policies/#:~:text=To%20enable%20network%20policies%20in,Amazon%20Linux%20AMI%20build%20script.)
- [AWS EKS vpc cni iam role](https://docs.aws.amazon.com/eks/latest/userguide/cni-iam-role.html)

## Features
Handles how IP adresses get assigned on nodes / pods
- installed by default with binary and ipamd plugin
- CNI so runs on each node as a daemonset
- allows pods to have same IP of a node ENI
- all containers inside a Pod share a network namespace
- supports vpc flow log, routing policies, and security groups

## Limitations
- max # of ENI's available depends on instance type
- default secondary ip mode is bad - eats up all your IPs quickly!

## Best practices
- use separate IAM role for vpc-cni using IRSA
- always set `ENABLE_PREFIX_DELEGATION` to true

## VPC CNI config

### `WARM_ENI_TARGET` 
keep a certain # of ENIs available pre-warmed and ready for use
This config setting should be calculated differently by instance size
This is tough as different instant sizes have different # of ENI's that can be attached

### `WARM_IP_TARGET`
keep a certain # of IPs available by creating and attaching additional ENIs
This config is more easily managed then `WARM_ENI_TARGET` as you don't have to know the max # of ENIs of an instance size

example: Large instance has 11 IPs used on ENI, then `WARM_IP_TARGET` of 10
will trigger new ENI to be created / attached

### EnableNetworkPolicy

```yaml
addons:
  - name: vpc-cni
    version: 1.14.0
    attachPolicyARNs: #optional
    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy 
    configurationValues: |-
      enableNetworkPolicy: "true"
```
## Bottlenecks

### ENIs
- ENI's can take 10 seconds up to 1 minute to attach!

### IPs
have to wait for leases to expire for IP's to free up.
This can take a few hours to a day!
So crashlooping pods / churning could really eat up and cause a lack of IPs to be available