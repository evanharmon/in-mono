# KUBERNETES CONFIGURATION FILES

## Resources

- [Kubernetes Service file Docs](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Kubernetes Deployment file Docs](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Kubernetes Configuration Files Env Vars](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/)

## Features

- resources created top to bottom in config file

## Single Deployment Configuration

- [Kubernetes Configuration Files Single Deployment Example](https://raw.githubusercontent.com/mhausenblas/kbe/master/specs/pods/constraint-pod.yaml)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: constraintpod
spec:
  containers:
    - name: sise
      image: mhausenblas/simpleservice:0.5.0
      ports:
        - containerPort: 9876
      resources:
        limits:
          memory: '64Mi'
          cpu: '500m'
```

## Access Denied Pulling Image

If using local docker images that are pre-built, use the `imagePullPolicy: Never` setting

```yaml
spec:
  containers:
    - name: uses-local-image
      image: local-image-name
      imagePullPolicy: Always
```

## Share Local Machine Folder As Volume

```yaml
spec:
  containers:
    - name: worker
      volumeMounts:
        - name: awscredentials
          mountPath: /root/.aws
          readOnly: true
  volumes:
    - name: awscredentials
      hostPath:
        path: /Users/myusername/.aws
```

## Store multiple objects in same file

use yaml convention `---`

```yaml
apiVersion: v1
kind: Service
---
apiVersion: apps/v1
kind: Deployment
```
