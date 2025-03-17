# KIND: BASIC MULTI NODE CLUSTER

## Configuration
`kind` cli doesn't support creating multiple nodes

example only:
```yaml
apiVersion: kind.x-k8s.io/v1alpha4
kind: Cluster
name: basic-multi-node-cluster
nodes:
- role: control-plane
- role: worker
- role: worker
```  

## Commands

make sure docker or orbstack is running

### Create cluster
```bash
# assumes default `kind` clustername if not specified in `name` field of yaml
kind create cluster --config=kind-config.yaml --wait 60s
# or with custom name passed or specified in `name` field of yaml
kind create cluster --name be-kind --config=kind-config.yaml --wait 60s
```

### Delete cluster
```bash
# get the name of the cluster
kind get clusters
# if using default `kind` clustername
kind delete cluster
# if using custom clustername - check kind-config.yaml as well
kind delete cluster --name="cluster_name"
```