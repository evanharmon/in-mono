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
- if node has limited disk, emptyDir could be stored in RAM
- if pod has high memory request, emptyDir may get stored in RAM

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

## Check where emptyDir is stored for a container
```bash
# exec in to container and check
kubectl exec -it redis -- /bin/sh
df -h
# /dev/sda1 means on disk
# tmpfs means it's in memory
```