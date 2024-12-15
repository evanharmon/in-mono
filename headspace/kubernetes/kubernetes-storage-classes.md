# KUBERNETES STORAGE CLASSES

## Resources

- [Kubernetes storage classes](https://kubernetes.io/docs/concepts/storage/storage-classes/)

## Features
provides a way to dynamically provision disk BEFORE creating volumes

- specify provisioner
- provisioner automatically generates persistent volumes in the cluster

## Practice

### Get storage classes
`kubectl get storageclasses` or `kubectl get sc`

### Local delayed storage class

```yml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-storage
provisioner: kubernetes.io/no-provisioner # indicates that this StorageClass does not support automatic provisioning
volumeBindingMode: WaitForFirstConsumer
```

### Google cloud storage storage class

```yml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: google-storage
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-standard
  replication-type: none
```