# KUBERNETES BINDINGS ROLE / CLUSTERROLE

## Features
ties a service account, user, etc to a specific role
- cluster role bindings are clusterwide
- rolebindings are namespaced
- clusterrole's can be limited to namespaces via a `rolebinding` instead

## Example namespace limited clusterrole
bind the clusterrole to a regular `rolebinding` which is namespaced

```bash
# Create clusterrole which has cluster access
kubectl create clusterrole mycr \
  --verb=get,list,watch \
  --resource=nodes
# Rolebinding to a specific namespace to limit access
kubectl create rolebinding blue-role-binding-cka21-arch \
  --clusterrole blue-role-cka21-arch \
  --namespace default \
  --serviceaccount=default:blue-sa-cka21-arch
```