# KUBERNETES KUBE APISERVER SECURITY

## Resources
- [Kubernetes authorization](https://kubernetes.io/docs/reference/access-authn-authz/authorization/)

## Features
kube-apiserver stands in front of many other kube components. It's the first line of defense

## Authentication

- username / passwords
- username / tokens
- certificates
- external authentication providers - LDAP
- service accounts (machine-to-machine communication)

## Authorization
list of authorizers available

- role based access control (RBAC)
- attribute based access control (ABAC)
- node
- webhook
- AlwaysAllow (bypasses checks)
- AlwaysDeny (bypasses checks)

### Authorization Mode
set on the kube-apiserver with the flag `--authorization-mode`
supports comma-separated list like:
`--authorization-mode=Node,RBAC,Webhook`

order of evaluation is as specified in the flag
as soon as one module approves, all checks end

### Attribute based access control (ABAC)
associate group of users with a set of permissions
cumbersome because any edits to the policy file require a restart of the kube-apiserver

### Role based access control (RBAC)
standard approach. Much easier to use as role is an object and has permissions associated with it.
changes occur immediately. users / groups get associated with the role

### Webhook
allows outsourcing of authorization to external systems

example: third-party `open policy agent`

## TLS Components
TODO - which components like kubelet are done via TLS certs?

## Example basic auth setup

```yml
# /etc/kubernetes/manifests/kube-apiserver.yml
apiVersion: v1
kind: Pod
metadata:
  name: kube-apiserver
  namespace: kube-system
spec:
  containers:
  - command:
    - kube-apiserver
    - --authorization-mode=Node,RBAC
    - --basic-auth-file=/tmp/users/user-details.csv
    image: k8s.gcr.io/kube-apiserver-amd64:v1.11.3
    name: kube-apiserver
    volumeMounts:
    - mountPath: /tmp/users
      name: usr-details
      readOnly: true
  volumes:
  - hostPath:
      path: /tmp/users
      type: DirectoryOrCreate
    name: usr-details
```

```yml
---
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: \[""\] # "" indicates the core API group
  resources: \["pods"\]
  verbs: \["get", "watch", "list"\]

---
 This role binding allows "evan" to read pods in the "default" namespace.
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: User
  name: user1 # Name is case sensitive
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role #this must be Role or ClusterRole
  name: pod-reader # this must match the name of the Role or ClusterRole you wish to bind to
  apiGroup: rbac.authorization.k8s.io
```

## Certificates
Lots of certificates have to be passed in:
- apiserver
- apiserver etcd client
- cluster CA
- apiserver kubelet client

example flags:

```sh
--etcd-cafile=/var/lib/kubernetes/ca.pem \
--etcd-certfile=/var/lib/kubernetes/apiserver-etcd-client.crt \
--etcd-keyfile=/var/lib/kubernetes/apiserver-etcd-client.key \
--kubelet-certificate-authority=/var/lib/kubernetes/ca.pem \
--kubelet-client-certificate=/var/lib/kubernetes/apiserver-kubelet-client.crt \
--kubelet-client-key=/var/lib/kubernetes/apiserver-kubelet-client.key \
--client-ca-file=/var/lib/kubernetes/ca.pem \
--tls-cert-file=/var/lib/kubernetes/apiserver.crt \
--tls-private-key-file=/var/lib/kubernetes/apiserver.key \
```