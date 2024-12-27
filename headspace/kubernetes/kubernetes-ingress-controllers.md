# KUBERNETES INGRESS

## Resources
- [Kubernetes ingress controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)
- [Kubernetes ingress controllers nginx](https://github.com/kubernetes/ingress-nginx)

## Features
loadBalancer solutions deploy a controller to route traffic.
Have additional features to monitor kubernetes cluster and adjust proxy configuration.

- deployed as a typical deployment object

## Common third-party solutions
- GCE (maintained by Kubernetes project)
- AWS
- AKS
- Nginx for kubernetes (maintained by Kubernetes project)
- Contour (envoy based)
- HAProxy
- Traefik
- Istio

## Limitations

- no default ingress controller is deployed by default for your applications
