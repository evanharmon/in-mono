# KUBERNETES SERVICES

## Resources

- [Kubernetes Services Docs](https://kubernetes.io/docs/concepts/services-networking/service)
- [Kubernetes Services Connecting Pods](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/)
- [Kubernetes Services Connecting Client Side / Server Side](https://kubernetes.io/docs/tasks/access-application-cluster/connecting-frontend-backend/)
- [Kubernetes Services Multi Port Support](https://kubernetes.io/docs/concepts/services-networking/service/#multi-port-services)
- [Kubernetes Services Tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/)

## Features

- types: `ClusterIP`, `NodePort`, and `LoadBalancer`

## Check For DNS Addon Service

Generic `kubectl` command, no need to change namespace, etc on docker mac

```console
kubectl get services kube-dns --namespace=kube-system
```

## Curl CoreDNS DNS Server

```console
kubectl run curl --image=radial/busyboxplus:curl -i --tty
```

## Get Endpoints For Service

```console
kubectl get ep my-nginx
```

## Delete service

```console
kubectl delete service my-app
```
