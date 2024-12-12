# KUBERNETES CLUSTERROLE

## Resources
- [Kubernetes clusterrole](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole)

## Features

- not namespaced

example cluster scoped resources:
- nodes
- clusterroles
- clusterrolebindings
- persist volumes
- certificatesigningrequests
- namespaces
- etc...

example roles:
- cluster admin
- storage admin

## Practice

### Get a list of non-namespaces resources
`kubectl api-resources --namespaced=false`

### Example clusterrole

imperative:
`kubectl create clusterrole mycr --verb=get,list,watch --resource=nodes`

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-admin
rules:
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["get", "watch", "list", "create", "delete"]
```

imperative:
`kubectl create role storage-admin --verb='*' --resource='persistentvolumes,storageclasses' --dry-run=client -o yaml`

binding:
```yml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: cluster-admin-role-binding
subjects:
- kind: User
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
```