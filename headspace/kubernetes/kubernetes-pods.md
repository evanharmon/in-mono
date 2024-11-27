# KUBERNETES PODS

## Resources

- [Kubernetes Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
- [Kubernetes Pods by example](http://kubernetesbyexample.com/pods/)

## Features
smallest unit in kubernetes. Houses containers

- supports init containers
- supports sidecar / helper containers
- containers can communicate over localhost

## Run A Docker Image In A Pod

Equivalent to `docker run` and `docker-compose start`
creates a deployment

`kubectl run sise --image=mhausenblas/simpleservice:0.5.0 --port=9876`

or

`kubectl run nginx --image nginx`

## Delete A Deployment

```console
kubectl delete deployment sise
```

## Create pod from local image

```console
kubectl run test --image='test' --image-pull-policy='Never'
```

## Create A Pod From A Configuration File

```console
kubectl create -f \
  https://raw.githubusercontent.com/mhausenblas/kbe/master/specs/pods/constraint-pod.yaml
```

## Exec In To A Container

```console
kubectl exec worker-deployment-c5dcfb5bf-scjq5 -i -t -- bash
```

## Check Logs

```console
kubectl logs pod-name
```

## Get pods
`kubectl get pods -A`

## Practice

### quickly run a pod 
`kubectl run nginx --image nginx`

### get pod with labels
`kubectl get pods --show-labels=true`

### get pods by label

`kubectl get pods -l app=nginx`

### get pods with ps output (node name)

`kubectl get pods -o wide`

### get pod with subresource like status

`kubectl get pod nginx --subresource status`

### get pod with custom columns

`kubectl get pod test-pod -o custom-columns=CONTAINER:.spec.containers[0].name,IMAGE:.spec.containers[0].image`

### get pod info using templates

`kubectl get pod nginx --template='{{.metadata.name}} is in {{.status.phase}} phase`

### get pod info using jsonpath

`kubectl get pod nginx -o jsonpath='{.spec.containers}'

### get pod images with jsonpath
note this lists image info about container statuses too
`kubectl get pod webapp -o jsonpath='{..image}'

### get all pods and list container images

`kubectl get pods -A -o go-template --template="{{range .items}}{{range .spec.containers}}{{.image}} {{end}}{{end}}"`

`kubectl get pod webapp -o template --template="{{range .spec.containers}}{{.image}} {{end}}"`

### get name of containers in pod with jsonpath
`kubectl get pod webapp -o jsonpath='{.spec.containers[*].name}'`

### get container status using templates

`kubectl get pod webapp --template='{{range .status.containerStatuses}} {{.name}} in state {{.state}} {{end}}'` 

### create basic pod spec yaml

`kubectl run nginx --dry-run=client --image nginx -o yaml`

## Notes
READY is the number of containers running out of total number of containers in pod spec