# KUBERNETES NAMESPACES

## Resources

- [Kubernetes namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
- [Kubernetes namespaces walkthrough](https://kubernetes.io/docs/tasks/administer-cluster/namespaces-walkthrough/)

## Features

- scope for Object Names
- mechanism to attach authorization and policy to a subsection of cluster
- 

## Common Namespaces

- kube-system is used by kubernetes
- kube-public is another common NS
- default is available but not optimal

## Practice

### Get namespace

`kubectl get namespace` or `kubectl get ns`

### Create Namespace

`kubectl create ns dev`

### Set namespace for kubectl commands

`kubectl config set-context $(kubectl config current-context) --namespace=dev`

### View resource in all namespaces

`kubectl get pods -A`