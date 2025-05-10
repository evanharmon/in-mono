# KUBERNETES KYVERNO

## Resources
- [Kyverno docs](https://kyverno.io/docs/)
- [Kyverno sample policies](https://kyverno.io/policies/)

## Features
`policy as code, simplified`. Policy enforcement engine that automates:
Governance / legal compliance, best practices, and institutional conventions

- policies can validate, mutate, generate, and cleanup kube resources
- supports custom resources as well
- supply chain verification of OCI container image sigs and artifacts
- policy reports / exceptions are kube API resources

## Tools supported
supports `JMESPath` and `CEL` for complex logic

- `kubectl`
- `git`
- `kustomize`

## Use cases
- ensuring specific label keys exist
- require specific image tag and NOT latest is used
- images are from approved repos
- ingress hostnames are globally unique
- enforce resource limits
- ensure deny default if no network policy exists

## Policy review steps
1. **API**

2. **Authentication / Authorization**

3. **Admission Controller**
remember: lots of plugins available to ensure specific rules are followed
`kyverno` hooks in to the webhooks based on the admission webhook CRDs

steps:
- mutating admission
- schema validation
- validating admission

4. **Etcd**
resource successful and stored in etcd

## Install

```sh
helm repo add kyverno https://kyverno.github.io/kyverno/
helm repo update
# Non-prod version that isn't HA
helm install kyverno kyverno/kyverno -n kyverno --create-namespace
# Prod with HA
helm install kyverno kyverno/kyverno -n kyverno --create-namespace \
--set admissionController.replicas=3 \
--set backgroundController.replicas=2 \
--set cleanupController.replicas=2 \
--set reportsController.replicas=2
```
