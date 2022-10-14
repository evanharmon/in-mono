# KUBERNETES MINIKUBE

## Create And Start A K\*8S Cluster On MacOS

```console
minikube start --kubernetes-version v1.10.0 --vm-driver=hyperkit
```

## Stop A Cluster

Preserves cluster and data

```console
minikube stop
```

## Delete A Cluster

Deletes cluster and data

```console
minikube delete
```

## List All Kubernetes Versions

```console
minikube get-k8s-versions
```

## Get IP Of Cluster

```console
minikube ip
```

## Use Docker Commands For Minikube

```console
eval $(minikube docker-env)
```

## View Dashboard

```console
minikube dashboard
```

## Persisting Data

Minikube configured to persist files stored in:
/data
/var/lib/localkube
/var/lib/docker

## Persistant Volume

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv0001
spec:
  accessModes:
    - ReadWriteOnce
  capacity:
    storage: 5Gi
  hostPath:
    path: /data/pv0001/
```
