# KUBERNETES STORAGE PERSISTENT VOLUME CLAIMS (PVC)

## Resources

- [Kubernetes storage persistent volume claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)
- [Kubernetes storage claims as volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes%5C)
- [kubernetes persistent volumes claims as volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes)

## Features
kubernetes attempts to find a persistent volume matching criteria

- bound to a single persistent volume
- sets access modes, storageClass, name
- supports selection of specific named persistent volumes
- `volumeName` can be specified to ensure a pvc uses a specific PV

## Limitations

- a claim can be made on a large capacity persistent volume even though only a small amt of storage is needed
- once a claim is made on a volume - no other claims can be made and so spaced can be wasted

## Practice

### Create persistent volume claim (pvc)

```yml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myclaim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
```

### Prebind pvc to persistent volume (PV)

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: my-pvc
spec:
  accessModes:
  - ReadWriteOnce
  storageClassName: my-stc
  volumeName: my-pv
  resources:
    requests:
      storage: 50Mi
```

### Get persistent volume claim (pvc)

`kubectl get persistentvolumeclaim` or `kubectl get pvc`

### Delete peristent volume claim (pvc)

`kubectl delete pvc myclaim`

### Use persistent volume claim in a pod

```yml
apiVersion: v1
kind: pod
metadata:
  name: mypod
spec:
  containers:
    - name: frontend
      image: nginx
      volumeMounts:
        - name: mypod
          mountPath: /var/www/html
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: myclaim
```

### Storage class persistent volume claim (pvc)
uses a created storage class for gce

```yml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myclaim
spec:
  accessModes:
  - ReadWriteOnce
  storageClassName: google-storage
  resources:
    requests:
      storage: 500Mi
```