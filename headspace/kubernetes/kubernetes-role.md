# KUBERNETES ROLE

## Resources
- [Kubernetes role](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole)

## Features

- namespace is required
- supports specific resource name access limits

## Practice

### Example role

imperative:
`kubectl create role mycr --verb=get,list,watch --resource=secrets`

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
  namespace: myns
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list", "create", "update", "delete"]
  resourceNames: ["nginx"]
- apiGroups: [""]
  resources: ["ConfigMap"]
  verbs: ["create"]
```

### Example rolebinding

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: developer
subjects:
- kind: User
  name: dev-user
  apiGroup: rbac.authorization.k8s.io/v1
roleRef:
  kind: Role
  name: developer
  apiGroup: rbac.authorization.k8s.io/v1
```

### Check access
`kubectl auth can-i create deployments`, etc.

check as another user
`kubectl auth can-i create pods --as dev-user --namespace=myns`