# KUBERNETES JSONPATH

## Resources
- [Kubernetes jsonpath](https://kubernetes.io/docs/reference/kubectl/jsonpath/)

## Get multiple values
`kubectl get nodes -o jsonpath='{.items[*].metadata} {"\n"} {.items[*].status.capacity.cpu}'`

## Sort by jsonpath
no `.items[*]` needed as sort by handles parsing per item
`kubectl get nodes --sort-by=.status.capacity.cpu`

## Get list of users in kubeconfig file
`kubectl config view --kubeconfig=/root/my-kube-config -o jsonpath={.users[*].name}`

## Find the context for a given user
```bash
kubectl config view \
  --kubeconfig=/root/my-kube-config \
  -o jsonpath='{.contexts[?(@.context.user == "aws-user")]}'
```

## Combine with custom columns and jsonpaths
```bash
kubectl get pv \
  --sort-by={.spec.capacity.storage} \
  -o custom-column=NAME:{.metadata.name},CAPACITY:{.spec.capacity.storage}
```