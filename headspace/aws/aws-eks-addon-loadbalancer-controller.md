# AWS EKS ADDON AWS LOAD BALANCER CONTROLLER

## Resources
- [AWS load balancer controller install guide](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/deploy/installation/)
- [AWS load balancer controller config guide](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/deploy/configurations/)
- [AWS load balancer controller examples](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/examples/echo_server/)
- [Github issue around preStop hook needed](https://github.com/kubernetes-sigs/aws-load-balancer-controller/issues/1719)
- [Zero downtime - rolling update AWS LB controller](https://easoncao.com/zero-downtime-deployment-when-using-alb-ingress-controller-on-amazon-eks-and-prevent-502-error/)

## Features
handles watching services / ingresses and managing ALB / NLB

## Best practices
- with IMDSv2, set hop limit to 2 or higher
  or pass `--aws-region` and `--aws-vpc-id` flags on controller

## Limitations
- subnets have to be tagged 

## IAM permissions
can be set via IRSA or on node iam role

## Subnets
have to be tagged!

```
private_subnet_tags = { "kubernetes.io/role/internal-elb" = 1 }
public_subnet_tags = { "kubernetes.io/role/elb" = 1 }
```

## Common issues

### 502's on rolling updates
have to use a `preStop` hook with a sleep.
play around with sleep value 5 - 15 sec? to what works

```
Use alb.ingress.kubernetes.io/target-type: ip
Make sure you use v2.x of ALB Controller and set this label on the namespace where you are putting your pods: kubectl label namespace <your_namespace> elbv2.k8s.aws/pod-readiness-gate-inject=enabled
Reduce de-register delay by applying this to your Ingress: alb.ingress.kubernetes.io/target-group-attributes: deregistration_delay.timeout_seconds=30 (by default it's 300 second which is too high)
Setup that sleep delay with preStop hook.
```
