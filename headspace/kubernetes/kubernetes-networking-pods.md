# KUBERNETES NETWORKING PODS

## Resources

- [Kubernetes Networking Guide](https://kubernetes.io/docs/concepts/cluster-administration/networking/)

## Features

- every POD gets a cluster-wide IP address
- all pods can communicate with other pods no matter which host they are on
- almost no need to create explicit links between pods
- almost no need to map container ports to host ports

## IP benefits

No need to do things like map host port `443` to `3000`.
Pod has it's own IP address and isn't being shared with host

## Port definitions

port definitions in Pods HAVE names.
Can be referenced in `targetPort` attribute of services by specifying `name`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app.kubernetes.io/name: proxy
spec:
  containers:
    - name: nginx
      image: nginx:stable
      ports:
        - containerPort: 80
          name: http-web-svc
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app.kubernetes.io/name: proxy
  ports:
    - name: name-of-service-port
      protocol: TCP
      port: 80
      targetPort: http-web-svc
```
