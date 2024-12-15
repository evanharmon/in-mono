# KUBERNETES SERVICEACCOUNTS

## Resources
- [Kubernetes service accounts](https://kubernetes.io/docs/concepts/security/service-accounts/)
- [Kubernetes manage service accounts](https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/)
- [Kubernetes configuring service accounts](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)

## Features

- namespaced
- non-human account
- serviceaccount can be linked to app pod
- token secrets located at `/var/run/secrets/kubernetes.io/serviceaccount`
- every namespace gets a `default` serviceaccount auto-generated

pre 1.24 behavior: order of creation by kubernetes:
- service account created
- token created and placed in a secret
- secret object linked to serviceaccount

post 1.24 behavior:
- service account created
- no token auto-generated

## Default serviceaccount
- extremely limited permissions to run basic kubernetes queries

since 1.22, every pod no longer automatically gets the default serviceaccount token mounted as a volume.
The tokens had no expiry. Now the serviceaccount-admission-controller mounts the token as a projected volume

improvements since 1.22 with the new tokenRequestApi. JWT's are now:
- audience bound
- time bound
- object bound

since 1.24: no longer true that 

## Practice

### Create service account

`kubectl create serviceaccount my-dashboard-sa`

### Describe serviceaccount and token

`kubectl describe serviceaccount my-dashboard-sa`

`kubectl describe secret my-dashboard-sa-token-###`

### Example curl using token
mimic's what would happen inside the app on a rest call to kube-apiserver

```sh
curl https://192.168.56.71:6443/api \
  --insecure \
  --header 'Authorization: bearer eyJh..'
```

### Check token secret files on pod
```sh
kubectl exec -it my-dashboard -- ls /var/run/secrets/kubernetes.io/serviceaccount
```
three files will exist:
- ca.crt
- namespace
- token

### Example serviceaccount for pod
- can't edit serviceaccount of existing pod. have to re-create
- deployments can be edited this and will trigger new rollout

```yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx
  serviceAccount: my-dashboard-sa
```

### Stop automount of default service account token
pre-1.22 / 1.24

```yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx
  automountServiceAccountToken: false
```

### Generate old non-expiring token
Not recommended - only if tokenRequestApi can't be used.
requires pre-generating serviceaccount. Will be associated with serviceaccount

```yml
apiVersion: v1
kind: Secret
metadata:
  name: non-expiry-secret
  annotations:
    kubernetes.io/serviceaccount-name: my-dashboard-sa
```

### Generate token for serviceaccount

`kubectl create token my-dashboard-sa`