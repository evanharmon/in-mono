# KUBERNETES KIND

## Resources

- [Kubernetes kind doc](https://kind.sigs.k8s.io/)
- [Kubernetes kind github](https://github.com/kubernetes-sigs/kind)

## Features
run kubernetes in docker
- useful for testing, working locally, etc.
- supports multi-node and HA clusters
- default networking is a simple solution named `kindnetd` 
- limited support for CNI's but some work like `calico`, `cilium`, etc.
- uses `kubeadm` to configure cluster nodes
- supports customizing `kubeadm` InitConfiguration, ClusterConfiguration, JoinConfiguration

## Best practices
Kind isn't setup for security - keep the apiserver to localhost / loopback.
Don't expose publicly

## Configuration

### Multi node cluster
`kind` cli doesn't support creating multiple nodes
```yaml
apiVersion: kind.x-k8s.io/v1alpha4
kind: Cluster
name: example-cluster1
nodes:
- role: control-plane
- role: worker
- role: worker
```  
`kind create cluster --config kind-config.yaml`

### Label nodes for nodeSelectors

```yaml
apiVersion: kind.x-k8s.io/v1alpha4
kind: Cluster
name: example-cluster1
nodes:
- role: control-plane
- role: worker
  labels: 
    tier: frontend
- role: worker
  labels: 
    tier: backend
```

### Extra mounts

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  # add a mount from /path/to/my/files on the host to /files on the node
  extraMounts:
  - hostPath: /path/to/my/files
    containerPath: /files
  #
  # add an additional mount leveraging *all* of the config fields
  #
  # generally you only need the two fields above ...
  #
  - hostPath: /path/to/my/other-files/
    containerPath: /other-files
    # optional: if set, the mount is read-only.
    # default false
    readOnly: true
    # optional: if set, the mount needs SELinux relabeling.
    # default false
    selinuxRelabel: false
    # optional: set propagation mode (None, HostToContainer or Bidirectional)
    # see https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation
    # default None
    #
    # WARNING: You very likely do not need this field.
    #
    # This field controls propagation of *additional* mounts created
    # *at runtime* underneath this mount.
    #
    # On MacOS with Docker Desktop, if the mount is from macOS and not the
    # docker desktop VM, you cannot use this field. You can use it for
    # mounts to the linux VM.
    propagation: None
```

### Port forward to kind nodes
```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  # port forward 80 on the host to 80 on this node
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    # optional: set the bind address on the host
    # 0.0.0.0 is the current default
    listenAddress: "127.0.0.1"
    # optional: set the protocol to one of TCP, UDP, SCTP.
    # TCP is the default
    protocol: TCP
---
kind: Pod
apiVersion: v1
metadata:
  name: foo
spec:
  containers:
  - name: foo
    image: hashicorp/http-echo:0.2.3
    args:
    - "-text=foo"
    ports:
    - containerPort: 5678
      hostPort: 80
```

### Port forward to nodePort
```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 30950
    hostPort: 80
---
kind: Pod
apiVersion: v1
metadata:
  name: foo
  labels:
    app: foo
spec:
  containers:
  - name: foo
    image: hashicorp/http-echo:0.2.3
    args:
    - "-text=foo"
    ports:
    - containerPort: 5678
---
apiVersion: v1
kind: Service
metadata:
  name: foo
spec:
  type: NodePort
  ports:
  - name: http
    nodePort: 30950
    port: 5678
  selector:
    app: foo
```