
# KUBERNETES KUBE-SCHEDULER

## Resources

- [Kubernetes kube-scheduler](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/)
- [Kyverno pod scheduling explained](https://kyverno.io/blog/2024/02/19/assigning-node-metadata-to-pods/)

## Features
Handles scheduling containers. Continually polls the kube-apiserver. Responds back to kube-apiserver with scheduling.

- determines which nodes to place Pods
- doesn't ACTUALLY place nodes - kubelet does that
- supports custom schedulers
- sets the `nodeName` on the Pod resource

Pays attention to:
- resource requirements and limits
- taints and tolerations
- node selectors and affinity

## Scheduling
Filters nodes, rank nodes, 

Looks at what nodes would look like after the pod would be scheduled.

## Deployment

Can always check options with `ps -aux | grep kube-scheduler`

### Kubeadm
Deploys kube-scheduler for you and it's visible as a pod on the master node

`kubectl get pods -n kube-system'

Settings are viewable at:
`cat /etc/kubernetes/manifests/kube-scheduler.yml`

### Manual

Settings are viewable at:
`cat /etc/systemd/system/kube-scheduler.service`

## Practice

### Manually schedule via pod spec
set `nodeName` in the pod definition yml

```yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    name: nginx
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
      - containerPort: 8080
  nodeName: node02
```


### Manually schedule via pod binding and curl request
```yml
apiVersion: v1
kind: Binding
metadata:
  name: nginx
target:
  apiVersion: v1
  kind: Node
  name: node02
```

```sh
curl \
  --header "Content-Type:application/json" \
  --request POST \
  --data @binding-spec.json \
  http://$SERVER/api/v1/namespaces/default/pods/$PODNAME/binding/
```