# KUBERNETES ENVIRONMENT VARIABLES

## Resources

- [Kubernetes environment variables for a container](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/)

## Practice

### Example env vars for a pod spec

```yml
apiVersion: v1
kind: Pod
spec:
  containers:
    - name: nginx
      image: nginx
      env:
        - name: EXAMPLE_VAR
          value: "test" 
```

### Example env vars from configMap

```yml
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
  labels:
    app: example
spec:
  containers:
    - name: example-container
      image: nginx:latest
      env:
        # Specify individual environment variables from a ConfigMap
        - name: ENV_VAR_1
          valueFrom:
            configMapKeyRef:
              name: example-configmap
              key: config-key-1
        - name: ENV_VAR_2
          valueFrom:
            configMapKeyRef:
              name: example-configmap
              key: config-key-2
```

### List env vars set on all pods

`kubectl set env pods --all --list`