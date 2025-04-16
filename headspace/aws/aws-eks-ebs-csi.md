# AWS EKS EBS CSI

## Features
CSI for ebs on EKS
- kubelet will talk to EBS
- controller manages lifecycle of volumes
- controller runs as daemonset deployment

## Limitations
remember EBS is an AZ bound service
- autoscaler needs to be sure to pick volumes from the right AZs!!

## Common issues

### Autoscaler keeps spawning nodes
if the cluster autoscaler isn't handling EBS volumes by AZ correctly,
it will create new nodes, in random AZ's, until it creates a node in an AZ with
an appropriate EBS volume.
Expensive!


## Static provision an EBS volume
NOTE: the reclaim policy is Retain!!! So requires EBS cleanup
for when a default storageclass / dynamic provisioning isn't setup

create volume:
`aws ec2 create-volume --size 10 --region us-east-1 --availability-zone us-east-1a --volume-type gp2`

update with volume ID
```bash
cat <<EOF | kubectl apply -f -
# Create a PersistentVolume (PV)
apiVersion: v1
kind: PersistentVolume
metadata:
  name: ebs-pv
spec:
  capacity:
    storage: 10Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  csi:
    driver: ebs.csi.aws.com
    fsType: ext4
    volumeHandle: vol-0ed366e0a1c58d709 
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: topology.kubernetes.io/zone
              operator: In
              values:
                - us-east-1a
---
# Create a PersistentVolumeClaim (PVC)
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ebs-pvc
spec:
  storageClassName: ""
  volumeName: ebs-pv
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
---
# Create a pod using the PVC
apiVersion: v1
kind: Pod
metadata:
  name: ebs-pod
spec:
  nodeSelector: 
    topology.kubernetes.io/zone: us-east-1a
  containers:
  - name: app
    image: busybox
    command: [ "sh", "-c", "echo Hello Kubernetes EBS CSI! && sleep 3600" ]
    volumeMounts:
    - mountPath: "/data"
      name: ebs-storage
  volumes:
  - name: ebs-storage
    persistentVolumeClaim:
      claimName: ebs-pvc
EOF
```

## Create storageclass for EBS and use dynamic provisioning
NOTE: this is RECLAIM POLICY DELETE
to support dynamic provisioning

```bash
cat <<EOF | kubectl apply -f -
# Create a StorageClass
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: ebs-sc
provisioner: ebs.csi.aws.com
volumeBindingMode: WaitForFirstConsumer
EOF
```

create a pod with a PVC using dynamic provisioning
```bash
cat <<EOF | kubectl apply -f -
# PVC
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ebs-pvc-new
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: ebs-sc
  resources:
    requests:
      storage: 10Gi
---
# Re-deploy pod
apiVersion: v1
kind: Pod
metadata:
  name: ebs-pod-new
spec:
  containers:
  - name: app
    image: busybox
    command: [ "sh", "-c", "echo Hello Kubernetes EBS CSI! && sleep 3600" ]
    volumeMounts:
    - mountPath: "/data"
      name: ebs-storage
  volumes:
  - name: ebs-storage
    persistentVolumeClaim:
      claimName: ebs-pvc-new
EOF
```