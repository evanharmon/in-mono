# KUBERNETES POD INIT CONTAINERS

## Resources

- [Kubernetes init containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)

## Features

- init / setup

## Practice

### Example init container

```yml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
  - name: myapp-container
    image: busybox:1.28
    command: ['sh', '-c', 'echo The app is running! && sleep 3600']
  initContainers:
  - name: init-myservice
    image: busybox
    command: ['sh', '-c', 'git clone  ;']
```