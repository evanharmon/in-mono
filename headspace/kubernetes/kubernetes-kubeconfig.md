# KUBERNETES KUBECONFIG

## Resources
- [Kubernetes organizing cluster access kubeconfig](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)
- [Kubernetes configure access to multiple clusters](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)

## Features

- default location is $HOME/.kube/config
- remember this is just a config file - not an object in kubernetes

## Sections
- clusters
- users
- contexts

## Clusters
there is where the `--client-certificate-authority` is stored

## Users
there is where the `--client-key` and `--client-certificate` are stored

## Contexts
marry users and clusters

example: `dev-user@Development`

## Practice

### Example kube config

```yml
apiVersion: v1
kind: Config
current-context: kube-admin@kube-playground
clusters:
- name: kube-playground
  cluster:
    # can be base64 encoded as well
    # certificate-authority-data: LS0...
    certificate-authority: /etc/kubernetes/pki/ca.crt
    server: https://kube-playground:6443
contexts:
- name: kube-admin@kube-playground
  context:
    cluster: kube-playground
    user: kube-admin
    namespace: finance # specific namespaces can optionally be specified
users:
- name: kube-admin
  user:
    client-certificate: admin.crt
    client-key: admin.key
```

### View current config
redacts sensitive values
`kubectl config view`

### View another config file
redacts sensitive values
`kubectl config view --kubeconfig=$HOME/.kube/other-config`

### Use a context
`kubectl config use-context prod-user@production`