
# KUBERNETES KUBE-SCHEDULER

## Resources

- [Kubernetes scheduling framework](https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/)
- [Kubernetes kube-scheduler](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/)
- [Kyverno pod scheduling explained](https://kyverno.io/blog/2024/02/19/assigning-node-metadata-to-pods/)
- [Kubernetes configure multiple schedulers](https://kubernetes.io/docs/tasks/extend-kubernetes/configure-multiple-schedulers/)
- [Kubernetes custom scheduler configuration](https://kubernetes.io/docs/reference/scheduling/config/#multiple-profiles)
- [Kubernetes scheduler profiles](https://kubernetes.io/docs/reference/scheduling/config/#profiles)
- [Kubernetes scheduler priorityclass](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_priorityclass/)
- [Kubernetes scheduler extensionPoints](https://kubernetes.io/docs/concepts/extend-kubernetes/#scheduling-extensions)

## Features
Handles scheduling containers. Continually polls the kube-apiserver. Responds back to kube-apiserver with scheduling.

- determines which nodes to place Pods
- doesn't ACTUALLY place nodes - kubelet does that
- supports custom schedulers that replace default or are addition scheduler with checks
- supports leaderElection for HA setups of custom schedulers
- sets the `nodeName` on the Pod resource
- offers a priority based queue with PrioritySort plugin and PriorityClass resources
- extensionPoints can be used to extend custom plugin to scheduling
- plugins can be enabled / disabled per scheduler profile

Pays attention to:
- resource requirements and limits
- taints and tolerations
- node selectors and affinity

## Limitations

- running multiple scheduler binaries can lead to race conditions so Profiles are necessary

## Plugins
some example plugins:

- PrioritySort
- NodeResourcesFit for filtering, scoring
- NodeName for filtering
- NodeUnschedulable to ignore cordon'd nodes
- ImageLocality for scoring (image exists)
- DefaultBinder
- TaintToleration
- NodePorts
- NodeAffinity

## High availability
runs in active-standby. Uses leader election process with leases.

- attempts to take the lock on an `kube-controller-manager` api object 

## Scheduling
Queue's, Filters, scores / rank, binds pod to a Node

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

### Custom scheduler configuration (old / non-standard way)
each custom scheduler has it's own config file

```yml
apiVersion: kubescheduler.config.k8s.io/v1
kind: KubeSchedulerConfiguration
profiles:
  - schedulerName: default-scheduler
  - schedulerName: no-scoring-scheduler
    plugins:
      preScore:
        disabled:
        - name: '*'
      score:
        disabled:
        - name: '*'
```

### Deploy additional scheduler as pod

```yml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-scheduler
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: my-scheduler-as-kube-scheduler
subjects:
- kind: ServiceAccount
  name: my-scheduler
  namespace: kube-system
roleRef:
  kind: ClusterRole
  name: system:kube-scheduler
  apiGroup: rbac.authorization.k8s.io
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: my-scheduler-as-volume-scheduler
subjects:
- kind: ServiceAccount
  name: my-scheduler
  namespace: kube-system
roleRef:
  kind: ClusterRole
  name: system:volume-scheduler
  apiGroup: rbac.authorization.k8s.io
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: my-scheduler-extension-apiserver-authentication-reader
  namespace: kube-system
roleRef:
  kind: Role
  name: extension-apiserver-authentication-reader
  apiGroup: rbac.authorization.k8s.io
subjects:
- kind: ServiceAccount
  name: my-scheduler
  namespace: kube-system
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-scheduler-config
  namespace: kube-system
data:
  my-scheduler-config.yaml: |
    apiVersion: kubescheduler.config.k8s.io/v1beta2
    kind: KubeSchedulerConfiguration
    profiles:
      - schedulerName: my-scheduler
    leaderElection:
      leaderElect: false    
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    component: scheduler
    tier: control-plane
  name: my-scheduler
  namespace: kube-system
spec:
  selector:
    matchLabels:
      component: scheduler
      tier: control-plane
  replicas: 1
  template:
    metadata:
      labels:
        component: scheduler
        tier: control-plane
        version: second
    spec:
      serviceAccountName: my-scheduler
      containers:
      - command:
        - /usr/local/bin/kube-scheduler
        - --config=/etc/kubernetes/my-scheduler/my-scheduler-config.yaml
        image: gcr.io/my-gcp-project/my-kube-scheduler:1.0
        livenessProbe:
          httpGet:
            path: /healthz
            port: 10259
            scheme: HTTPS
          initialDelaySeconds: 15
        name: kube-second-scheduler
        readinessProbe:
          httpGet:
            path: /healthz
            port: 10259
            scheme: HTTPS
        resources:
          requests:
            cpu: '0.1'
        securityContext:
          privileged: false
        volumeMounts:
          - name: config-volume
            mountPath: /etc/kubernetes/my-scheduler
      hostNetwork: false
      hostPID: false
      volumes:
        - name: config-volume
          configMap:
            name: my-scheduler-config
```

### Deploy a pod using a custom scheduler

```yml
apiVersion: v1
kind: Pod
spec:
  containers:
    - name: mypod
      image: gcr.io/myproject/mypod
  schedulerName: my-scheduler
```

### Check scheduler events

`kubectl get events -o wide`


### Example PriorityClass

`kubectl create priorityclass high-priority --value=1000 --description="high priority"`

or imperatively

```yml
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000
globalDefault: false
description: "high priority"
```