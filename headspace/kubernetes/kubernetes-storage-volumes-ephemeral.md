# KUBERNETES STORAGE EPHEMERAL VOLUMES

## Resources

- [Kubernetes storage ephemeral volumes](https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/)

## Types

- emptyDir
- configMap, downwardAPI, secret
- CSI ephemeral volumes
- generic ephemeral volumes

## Practice

### Ebs volume

```yml
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
    - image: app
      name: app
      volumeMounts:
        - mountPath: /opt/app-data
          name: app-data
  volumes:
    - name: app-data
      awsElasticBlockStore:
        volumeId: <volume-id>
        fsType: ext4
```