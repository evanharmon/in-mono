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

## Find InternalIPs of nodes

```bash
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="InternalIP")].address}'
# or with a range where additional text could be added
kubectl get nodes \
  -o jsonpath='{range .items[*]}{.status.addresses[?(@.type=="InternalIP")].address}{" "}{end}'
```

## Combine with custom columns and jsonpaths
```bash
kubectl get pv \
  --sort-by={.spec.capacity.storage} \
  -o custom-column=NAME:{.metadata.name},CAPACITY:{.spec.capacity.storage}
```

## Get the component label from a kube component
```bash
kubectl --context cluster1 get pod \
  -n kube-system \
  kube-apiserver-cluster1-controlplane \
  -o jsonpath='{.metadata.labels.component}'
```

## Get list of permissions of resources and verbs
removes the trailing comma as well

```bash
k get clusterrole red-role-cka23-arch -o jsonpath='{"resource:"}{.rules[*].resources[*]}{"|verbs:"}{range .rules[*].verbs[*]}{@}{","}{end}' | sed 's/,*$//'
```