# KUBERNETES SERVICES

## Resources

- [Kubernetes Services Docs](https://kubernetes.io/docs/concepts/services-networking/service)
- [Kubernetes Services Connecting Pods](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/)
- [Kubernetes Services Connecting Client Side / Server Side](https://kubernetes.io/docs/tasks/access-application-cluster/connecting-frontend-backend/)
- [Kubernetes Services Multi Port Support](https://kubernetes.io/docs/concepts/services-networking/service/#multi-port-services)
- [Kubernetes Services Tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/)

## Features

- types: `ClusterIP`, `NodePort`, and `LoadBalancer`
- default type is ClusterIP
- if no nodePort is set, a one will be generated between 30000-32767
- if no targetPort is given, defaults to match targetPort
- within own namespace, other pods can access service just by name

## Practice

### Get service
`kubectl get service` or `kubectl get svc`

### Generate service yaml
`kubectl create svc nodeport webapp-service --dry-run=client --node-port=30080 --tcp=8080:8080 -o yaml`

### Create service
`kubectl create svc nodeport mysvc --node-port=30080 --tcp=8080:8080`

### Delete service

`kubectl delete svc my-app`

### Check For DNS Addon Service

Generic `kubectl` command, no need to change namespace, etc on docker mac

`kubectl get services kube-dns --namespace=kube-system`

### Curl CoreDNS DNS Server

`kubectl run curl --image=radial/busyboxplus:curl -i --tty`

### Get Endpoints For Service

`kubectl get endpoints my-nginx` or `kubectl get ep my-nginx`

### Get ports for a service
`kubectl get svc -o jsonpath='{..ports}'`

### Create and expose a service on `kubectl run`

`kubectl run httpd --image=httpd:alpine --port=80 --expose=true`

## Common Issues

- type: `LoadBalancer` will default to basic NodePort behavior if not on a supported platform

- endpoints count is zero. The service selectors probably aren't matching any pods.
- `kubectl create service clusterip redis` uses a default of `app=redis`
- `kubectl expose pod nginx --type=NodePort` doesn't allow specifying the exact node port