# KUBERNETES

## Resources

- [Kubernetes install via Docker Desktop](https://store.docker.com/editions/community/docker-ce-desktop-mac)
- [Kubernetes enable on Docker](https://docs.docker.com/docker-for-mac/#kubernetes)
- [Kubernetes Linux Install](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-linux)

## Dashboard

Deploying and access the dashboard requires the below steps to be completed:

Deploy dashboard, get pod name, and expose locally

```console
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta1/aio/deploy/recommended.yaml
kubectl get pods --namespace=kubernetes-dashboard
kubectl port-forward kubernetes-dashboard-7798c48646-ctrtl 8443:8443 --namespace=kubernetes-dashboard
```

Get token for dashboard and login

```console
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | awk '/^deployment-controller-token-/{print $1}') | awk '$1=="token:"{print $2}' | pbcopy
open https://localhost:8443
```

default dashboard address: `http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/`
