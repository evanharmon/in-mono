# KUBERNETES NETWORKING SERVICES

## Resources

- [Kubernetes service networking](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Kubernetes connecting apps to services](https://kubernetes.io/docs/tutorials/services/connect-applications-service/)
- [Kubernetes connecting frontend to backend with services](https://kubernetes.io/docs/tasks/access-application-cluster/connecting-frontend-backend/)
- [Kubernetes use service to access app in cluster](https://kubernetes.io/docs/tasks/access-application-cluster/service-access-application-cluster/)

## Features
Common solutions are kube-proxy, etc.

- ip forwarding address/port rules are created on each node

## Service Types

- ClusterIP
- NodePort
- LoadBalancer
- ExternalName

## ClusterIP

Default. Meant just for communication within the cluster

- default if no `type` specified
- exposes service on a cluster-internal IP
- service only reachable within Cluster

## Set services ip range

set on kube-api-server with the flag `--service-cluster-ip-range`
default is `10.0.0.0/24`

## FQDN
services are resolved like the below.

format: <hostname>.<namespaces>.<type>.<root>
example `my-svc.apps.svc.cluster.local`

this can be looked up via `host <service>`

## NodePort

- exposes service on each Node's IP at a static port
- also sets up a cluster IP address just like type ClusterIP
- supports custom load balancing solutions
- can expose one or more node IPs directly

## NodePort example

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: NodePort
  selector:
    app.kubernetes.io/name: MyApp
  ports:
    # By default and for convenience, the `targetPort` is set to the same value as the `port` field.
    - port: 80
      targetPort: 80
      # Optional field
      # By default and for convenience, the Kubernetes control plane will allocate a port from a range (default: 30000-32767)
      nodePort: 30007
```

## Loadbalancer

exposes service a cloud provider load balancer

## ExternalName

requires kube-dns and/or CoreDNS

- maps service via a CNAME like `foo.bar.example.com`

## Multi-port services

all ports must be named

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app.kubernetes.io/name: MyApp
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: 9376
    - name: https
      protocol: TCP
      port: 443
      targetPort: 9377
```

## Headless services

used when don't need load balancing and just need single service IP
created by specifying `ClusterIP: None` in service

- cluster IP is NOT allocated
- DNS depends on whether or not service has Selectors defined
