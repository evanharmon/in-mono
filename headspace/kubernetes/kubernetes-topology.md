# KUBERNETES TOPOLOGY

## Examples

### Limit deployment to one pod per node
relies on anti-affinity to ensure only one pod runs per node

``yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchLabels:
                  app: example
              topologyKey: kubernetes.io/hostname
      containers:
        - name: nginx
          image: nginx
```