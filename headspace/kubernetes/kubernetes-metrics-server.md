# KUBERNETES METRICS SERVER

## Resources
- [Kubernetes metrics server](https://github.com/kubernetes-sigs/metrics-server)

## Features

## Limitations

- in memory only

## Practice

### Minikube setup

`minikube addons enable metrics-server`

all other setups: 
`kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml`

### Check metrics

`kubectl top node`
`kubectl top pod`