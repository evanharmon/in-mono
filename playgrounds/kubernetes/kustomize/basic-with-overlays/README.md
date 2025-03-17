# Basic kustomize example playground

This is meant to be trivial. The web server doesn't actually communicate with the cache

## Prereqs
Use kind or have an existing kube-apiserver available via kubectl

### Create kind cluster
`kind create cluster`

### Delete kind cluster
`kind delete cluster`

## Commands

### Check base yaml
`kubectl kustomize base`

### Check an overlay
`kubectl kustomize ./overlays/staging`

### Create overlay resources
`kubectl kustomize ./overlays/dev | kubectl apply -f -`

### Delete overlay resources
`kubectl kustomize ./overlays/dev | kubectl delete -f -`