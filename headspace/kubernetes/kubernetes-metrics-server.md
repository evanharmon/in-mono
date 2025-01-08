# KUBERNETES METRICS SERVER

## Resources
- [Kubernetes metrics server](https://github.com/kubernetes-sigs/metrics-server)

## Features
- supports automatic scaling and similar use cases
- HorizontalPodAutoscaler(HPA) and VerticalPodAutoscaler (VPA) use metrics api
- second metrics pipeline can be deployed for custom metrics / more complete metrics
- sits behind kube-apiserver
- communicates with kubelet and cAdvisor

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