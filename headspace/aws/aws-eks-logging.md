# AWS EKS LOGGING

## Resources
- [EKS workshop logging](https://www.eksworkshop.com/docs/observability/logging/)
- [AWS prescriptive EKS logging doc](https://docs.aws.amazon.com/prescriptive-guidance/latest/implementing-logging-monitoring-cloudwatch/kubernetes-eks-logging.html)
- [EKS send controlplane logs to CloudWatch](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html)

## Features
- by default, controlplane logs are NOT sent to CloudWatch
- by default, cloudwatch log group retention period is FOREVER

## CloudWatch log groups
EKS automatically creates a cloudwatch log group named after the cluster if none exists

so if you want a custom cloudwatch log group with encryption with kms, etc, create if FIRST before EKS cluster

## Logging types
- controlplane
- node
- application

### Controlplane
- integrates with CloudWatch
- logging for specific components can be enabled

components that can be enabled:
- `api`
- `audit`
- `authenticator`
- `controllerManager`
- `scheduler`
