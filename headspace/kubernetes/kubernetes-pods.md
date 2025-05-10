# KUBERNETES PODS

## Resources

- [Kubernetes Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
- [Kubernetes Pods by example](http://kubernetesbyexample.com/pods/)

## Features
smallest unit in kubernetes. Houses containers

- supports init containers
- supports sidecar / helper containers
- containers can communicate over localhost

## Run commands

### Run A Docker Image In A Pod
Equivalent to `docker run` and `docker-compose start`
creates a deployment

```sh
kubectl run sise --image=mhausenblas/simpleservice:0.5.0 --port=9876
kubectl run nginx --image nginx
# Create basic pod spec yaml
kubectl run nginx --dry-run=client --image nginx -o yaml
# Create pod from local image
kubectl run test --image='test' --image-pull-policy='Never'
```

### Create with requests and limits
```sh
kubectl run my-app --image=nginx:latest \
    --requests=cpu=200m,memory=128Mi \
    --limits=cpu=500m,memory=256Mi
```

### Create pod from configuration file

```sh
kubectl create -f \
  https://raw.githubusercontent.com/mhausenblas/kbe/master/specs/pods/constraint-pod.yaml
```

## Delete commands

### Delete A Deployment
`kubectl delete deployment sise`

## Exec commands

### Exec In To A Container

`kubectl exec worker-deployment-c5dcfb5bf-scjq5 -i -t -- bash`

## Logs commands

### Check Logs
`kubectl logs pod-name`

## Get commands

### Get pods
```sh
kubectl get pods -A
# Get pod with labels
kubectl get pods --show-labels=true
# Get pods by label
kubectl get pods -l app=nginx
# Get pods with ps output (node name)
kubectl get pods -o wide
# Get pod with subresource like status
kubectl get pod nginx --subresource status
```

### Get pod with custom columns

`kubectl get pod test-pod -o custom-columns=CONTAINER:.spec.containers[0].name,IMAGE:.spec.containers[0].image`

### Get pod info using templates

`kubectl get pod nginx --template='{{.metadata.name}} is in {{.status.phase}} phase`

### Get pod info using jsonpath

`kubectl get pod nginx -o jsonpath='{.spec.containers}'`

### Get pod images with jsonpath
note this lists image info about container statuses too
`kubectl get pod webapp -o jsonpath='{..image}'`

### Get all pods and list container images

```sh
kubectl get pods -A -o go-template --template="{{range .items}}{{range .spec.containers}}{{.image}} {{end}}{{end}}"
kubectl get pod webapp -o template --template="{{range .spec.containers}}{{.image}} {{end}}"
```

### Get name of containers in pod with jsonpath
`kubectl get pod webapp -o jsonpath='{.spec.containers[*].name}'`

### Get container status using templates
`kubectl get pod webapp --template='{{range .status.containerStatuses}} {{.name}} in state {{.state}} {{end}}'` 

## Notes
READY is the number of containers running out of total number of containers in pod spec
