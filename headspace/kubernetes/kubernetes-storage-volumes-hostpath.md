# KUBERNETES STORAGE VOLUMES HOSTPATH

avoid where possible due to security risks

## Resources

- [Kubernetes storage volumes hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath)

## Features

- allows access to Docker internals via hostPath `/var/lib/docker`
- allows mounting from node's filesystem to a Pod
- host directory can be created if does not exist

## Limitations

- files and directories created by underlying host only writable by root
- files and directories may need to be adjusted for access beyond root

## Example

use type `DirectoryOrCreate` to create dir on host if does not exist

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
        - mountPath: /test-pd
          name: test-volume
  volumes:
    - name: test-volume
      hostPath:
        path: /data # directory location on host
        type: Directory # this field is optional
```
