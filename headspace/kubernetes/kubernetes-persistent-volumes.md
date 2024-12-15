# KUBERNETES PERSISTENT VOLUMES

## Resources

- [Kubernetes persistent volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)

## Features
clusterwide central storage using persistent volumes (pv) and persistent volume claims (pvc)

- admin can create large pool of storage for use by apps
- avoids needing to reflect changes down to each individual pod / app
- users / apps can carve out areas for their storage
- default is to retain volume when pvc claim deleted

## Access Modes

- ReadWriteOnce
- ReadOnlyMany
- ReadWriteMany
- ReadWriteOncePod

## Reclaim policy options

- Retain
- Delete
- Recycle

## Practice

### Create volume with hostPath

```yml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-vol1
spec:
  accessModes:
    - ReadWriteOnce
  capacity:
    storage: 1Gi
  hostPath: # change for other volume tyypes
    path: /tmp/data # don't use in prod obv
```

### Get volume

`kubectl get persistentvolume` or `kubectl get pv`

### Recycle persistent volume (pv)

```yml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv0003
spec:
  capacity:
    storage: 5Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: slow
  mountOptions:
    - hard
    - nfsvers=4.1
  nfs:
    path: /tmp
    server: 172.17.0.2
```