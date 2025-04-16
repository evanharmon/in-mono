## AWS EKS ADDON LOAD BALANCER CONTROLLER EXAMPLES

## Simple example webapp / service to test with
WARNING NON-HTTPS
note: only works on X86

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp-color
  labels:
    app: webapp-color
spec:
  # turned down to save $$
  replicas: 1
  selector:
    matchLabels:
      app: webapp-color
  template:
    metadata:
      labels:
        app: webapp-color
    spec:
      containers:
      - name: webapp-color
        image: kodekloud/webapp-color
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: webapp-color
  namespace: default
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
    service.beta.kubernetes.io/aws-load-balancer-internal: "false" # Ensure this line is not set to "true"
spec:
  type: LoadBalancer
  selector:
    app: webapp-color
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```

## Simple game example
WARNING NON-HTTPS
note: only works on X86

```bash
# Source
curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.11.0/docs/examples/2048/2048_full.yaml
# or YOLO it
kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.11.0/docs/examples/2048/2048_full.yaml
```

```yaml
# example of above
---
apiVersion: v1
kind: Namespace
metadata:
  name: game-2048
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: game-2048
  name: deployment-2048
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: app-2048
  # turned down to save $$
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: app-2048
    spec:
      containers:
      - image: public.ecr.aws/l6m2t8p7/docker-2048:latest
        imagePullPolicy: Always
        name: app-2048
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  namespace: game-2048
  name: service-2048
spec:
  ports:
    - port: 80
      targetPort: 80
      protocol: TCP 
  type: NodePort
  selector:
    app.kubernetes.io/name: app-2048
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: game-2048
  name: ingress-2048
  annotations:
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
spec:
  ingressClassName: alb
  rules:
    - http:
        paths:
        - path: /
          pathType: Prefix
          backend:
            service:
              name: service-2048
              port:
                number: 80
```

## Another example
from Claude, works on ARM and X86
tested and works

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-app
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: example-app
  template:
    metadata:
      labels:
        app: example-app
    spec:
      containers:
      - name: example-app
        image: nginx:1.21
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
---
apiVersion: v1
kind: Service
metadata:
  name: example-app-service
  namespace: default
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
  selector:
    app: example-app
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-app-ingress
  namespace: default
  annotations:
    kubernetes.io/ingress.class: "alb"
    alb.ingress.kubernetes.io/scheme: "internet-facing"  # For public access
    alb.ingress.kubernetes.io/target-type: "ip"
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}]'
    # Optional: Enable HTTPS (requires certificate)
    # alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS": 443}]'
    # alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:region:account-id:certificate/certificate-id"
    
    # Optional: Add security groups
    # alb.ingress.kubernetes.io/security-groups: sg-xxxxx,sg-yyyyy
    
    # Optional: Configure health checks
    alb.ingress.kubernetes.io/healthcheck-path: "/"
    alb.ingress.kubernetes.io/healthcheck-interval-seconds: "15"
    alb.ingress.kubernetes.io/healthcheck-timeout-seconds: "5"
    alb.ingress.kubernetes.io/success-codes: "200"
    alb.ingress.kubernetes.io/healthy-threshold-count: "2"
    alb.ingress.kubernetes.io/unhealthy-threshold-count: "2"
spec:
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: example-app-service
            port:
              number: 80
```
