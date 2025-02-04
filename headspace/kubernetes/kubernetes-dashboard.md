# KUBERNETES DASHBOARD

## Resources
- [Kubernetes dashboard deploy and access](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)
- [Kubernetes dashboard create sample user and token](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)

## Deploy

### Install with helm
```bash
helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
helm upgrade \
  --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard \
  --create-namespace --namespace kubernetes-dashboard
```

## Access

### Port-forward access with kubectl
`kubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard-kong-proxy 8443:443`

### Create admin user for login

Store it in a secret for easy retrieval
```bash
kubectl apply -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
---
apiVersion: v1
kind: Secret
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
  annotations:
    kubernetes.io/service-account.name: "admin-user"   
type: kubernetes.io/service-account-token  
EOF
```

Get token
```bash
# if not using secret, generate it
kubectl -n kubernetes-dashboard create token admin-user
# via secret
kubectl get secret admin-user -n kubernetes-dashboard -o jsonpath="{.data.token}" | base64 -d
```