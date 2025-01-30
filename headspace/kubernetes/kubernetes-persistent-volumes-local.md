# KUBERNETES PERSISTENT VOLUMES LOCAL

## Resources
- [Kubernetes persistent volumes local](https://kubernetes.io/docs/concepts/storage/volumes/#local)

## Features
A local volume represents a mounted local storage device such as a disk, partition or directory.
- works on multi-node clusters

## Limitations
- can only be used as statically created pv's, dynamic provisioning is not supported
- subject to the availability of the underlying node, if node goes unhealthy, so does volume

## Requirements
nodeAffinity HAS to be set 

## Examples

### Local mount
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: example-pv
spec:
  capacity:
    storage: 100Gi
  volumeMode: Filesystem
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /mnt/disks/ssd1
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - example-node
```

### Create local path volume with node affinity

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: orange-pv-cka07-str
spec:
  storageClassName: orange-stc-cka07-str
  capacity:
    storage: 150Mi
  accessModes:
    - ReadWriteOnce
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
          - key: kubernetes.io/hostname
            operator: In
            values:
            - cluster1-controlplane            
  local:
    path: "/opt/orange-data-cka07-str"
```