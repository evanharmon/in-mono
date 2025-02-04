# KUBERNETES KIND CLI

## Features
- default clustername is `kind-kind`

## Commands

### Create cluster
```bash
# default single node controlplane
kind create cluster
# wait for controlplane to be ready
kind create cluster --wait 60s
# with config
kind create cluster --config kind-config.yaml
# Retain nodes on failure for debugging
kind create cluster --retain
```

### Delete cluster
`kind delete cluster --name=${CLUSTER_NAME}`

### Export kubeconfig
`kind export kubeconfig`

### Export logs
`kind export logs --name=${CLUSTER_NAME}`