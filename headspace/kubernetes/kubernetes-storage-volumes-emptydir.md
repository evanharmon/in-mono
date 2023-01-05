# KUBERNETES STORAGE VOLUMES EMPTYDIR

## Resources

- [Kubernetes storage volumes emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)

## Features

- survives pod restarts as long as stays on same Node
- great for: scratch space, checkpointing, content management files

## Limitations

- volume type is ephemeral
- tied to specific Node running container
- volume deleted when Pod is removed from node

## Example

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: test-pd
spec:
  containers:
    - image: registry.k8s.io/test-webserver
      name: test-container
      volumeMounts:
        - mountPath: /cache
          name: cache-volume
  volumes:
    - name: cache-volume
      emptyDir: {}
```
