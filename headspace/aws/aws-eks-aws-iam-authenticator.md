# AWS EKS AWS IAM AUTHENTICATOR

## Resources
- [Github aws iam authenticator plugin](https://github.com/kubernetes-sigs/aws-iam-authenticator)

## Features
authenticate to kubernetes with IAM credentials
- avoids need for managing separate credential for kube access
- supports 2FA / MFA
- provides out of band audit trail (cloudtrail)
- runs as a daemonset on each node
