# LOCALSTACK AWS EKS

## Resources
- [Localstack AWS EKS docs](https://docs.localstack.cloud/user-guide/aws/eks/)
- [Access-auth-authz x509 cert for pre-existing kubernetes clusters](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#x509-client-certificates)

## Features
- supports localstack k3ds
- supports pre-existing k8s (only via X509 auth though)

## Limitations
- can only use x509 access-authn-authz with pre-existing k8s clusters
