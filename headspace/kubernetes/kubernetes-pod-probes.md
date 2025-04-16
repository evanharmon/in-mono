# KUBERNETES PODS PROBES

## Resources
- [Kubernetes Pods Liveness, Readiness, Startup Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

## Features
probes to monitor health and status of containers
- set at the CONTAINER level not pod level
- liveness and readiness probes run periodically
- startup probe runs till success or failure

## Types
- liveness
- readiness
- startup

### Liveness
checks if container is still aLIVE (not deadlocked or stuck)
on failure: kubernetes will restart the container

### Readiness
checks if container is READY to accept traffic
on failure: kubernetes removes pod from service endpoints

use cases:
- delay traffic until pod / container is fully initialized
- stop traffic from svc going to non-working container

### Startup
tells kubernetes when app has started successfully
stops running after success or failureThreshold is reached

once succeeds, hands over to liveness and readiness probes

on failure: kubernetes will restart the container

use cases:
- prevents premature liveness failures on startup

## Examples

### Readiness HTTP probe

```yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - image: nginx
      name: nginx
      readinessProbe:
        httpGet:
          path: /
          port: 80
          scheme: HTTP
```

### Liveness command check

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: liveness
      image: registry.k8s.io/busybox
      args:
        - /bin/sh
        - -c
        - touch /tmp/healthy; sleep 30; rm -f /tmp/healthy; sleep 600
      livenessProbe:
        exec:
          command:
            - cat
            - /tmp/healthy
        initialDelaySeconds: 5
        periodSeconds: 5
```

### Liveness HTTP health check

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    test: liveness
  name: liveness-http
spec:
  containers:
    - name: liveness
      image: registry.k8s.io/liveness
      args:
        - /server
      livenessProbe:
        httpGet:
          path: /healthz
          port: 8080
          httpHeaders:
            - name: Custom-Header
              value: Awesome
        initialDelaySeconds: 3
        periodSeconds: 3
```

### Startup HTTP check

```yaml
containers:
- name: my-app
  image: slow-starting-app
  startupProbe:
    httpGet:
      path: /healthz
      port: 8080
    failureThreshold: 30
    periodSeconds: 10
```
