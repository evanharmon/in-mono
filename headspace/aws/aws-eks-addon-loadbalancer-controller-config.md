# AWS EKS ADDON AWS LOAD BALANCER CONTROLLER CONFIG

## Resources
- [AWS EKS AWS LB controller helm chart values](https://github.com/kubernetes-sigs/aws-load-balancer-controller/blob/main/helm/aws-load-balancer-controller/values.yaml)

## CNI
for vpc-cni set the below:
`defaultTargetType = ip`

for cilium / calico set it to:
`defaultTargetType = instance`
