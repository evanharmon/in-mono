# KUBERNETES CLUSTERROLE

## Resources
- [Kubernetes clusterrole](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole)

## Features

- not namespaced

## Practice

### Example clusterrole

imperative:
`kubectl create clusterrole mycr --verb=get,list,watch --resource=secrets`

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: secret-reader
rules:
- apiGroups: [""]
  resources: ["secrets"]
  verbs: ["get", "watch", "list"]
```