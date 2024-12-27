# KUBERNETES INGRESS

## Resources
- [Kubernetes ingress controllers nginx](https://kubernetes.github.io/ingress-nginx/)
- [Kubernetes ingress controllers nginx github](https://github.com/kubernetes/ingress-nginx)

## Features
- special build that lives in `/nginx-ingress-controller`
- stores configuration in configmap

## Example deployment
- should create a new NS first
- requires configmap - can be empty

use helm. See the associated created roles, clusterroles, bindings, service accounts, services, etc.

```sh
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx/release-1.6
helm install nginx-ingress-controller --set defaultBackend.serviceName=nginx-ingress-controller-service \
  --set ingressClassName=ingress-nginx
```

## Example ingress resource

use annotation `nginx.ingress.kubernetes.io/rewrite-target: /` to route to empty / paths without service name

<summary>DefaultBackend</summary>

<details>

```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  namespace: ingress-nginx
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  defaultBackend:
    service:
      name: nginx-ingress
      port: 80
```
</details>

<summary>rules path based routing</summary>

<details>

```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  namespace: ingress-nginx
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /api 
        backend:
          serviceName: nginx-ingress
          servicePort: 80
      - path: /api/v1
        backend:
          serviceName: nginx-ingress
          servicePort: 80
  - host: example.com
    http:
      paths:
      - path: /api/v2
        backend:
          serviceName: nginx-ingress
          servicePort: 80
```
</details>

<summary>sub domain routing</summary>

<details>

```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  namespace: ingress-nginx
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /api
        backend:
          serviceName: nginx-ingress
          servicePort: 80
  - host: dashboard.example.com
    http:
      paths:
      - path: /
        backend:
          serviceName: nginx-ingress
          servicePort: 80
```
</details>

## Commands

### Create ingress
```sh
kubectl create ingress \
  --annotation='nginx.ingress.kubernetes.io/rewrite-target: /' \
  -n my-ns \
  --rule="/pay=pay-service:8282"
```