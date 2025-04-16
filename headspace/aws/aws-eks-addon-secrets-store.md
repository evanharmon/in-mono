# AWS EKS ADDON SECRETS STORE

## Resources
- [EKS blueprints secrets store addon](https://aws-quickstart.github.io/cdk-eks-blueprints/addons/secrets-store/)

## Features
works with both secrets manager and parameter store
- follows best practice of using external secret store
- supports iam role for service accounts (IRSA)
- supports rotation

## Limitations
- note the built in limitations of parameter store vs secrets manager

## Best practice
while this is good - it still leaves secrets as ENV vars or as a volumeMount.
If you want BEST security - use aws SDK's inside application so secrets are only in memory
