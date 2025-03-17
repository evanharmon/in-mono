# KIND: CONTROLPLANE ONLY CLUSTER

## Configuration
`kind` cli doesn't support creating multiple nodes

example only:
```yaml
apiVersion: kind.x-k8s.io/v1alpha4
kind: Cluster
name: basic-controlplane-cluster
nodes:
- role: control-plane
  # specify node image to install specific kubernetes version
  # image: kindest/node:v1.31.2@sha256:18fbefc20a7113353c7b75b5c869d7145a6abd6269154825872dc59c1329912e
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