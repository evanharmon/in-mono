# KUBERNETES TAINTS

## Resources
- [Kubernetes Taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)
- [Kubernetes taints and tolerations example blog](https://blog.kubecost.com/blog/kubernetes-taints/)

## Features

- allow a node to repel a set of pods

## Settings
NoSchedule, PreferNoSchedule, and NoExecute

NoSchedule: pods won't be scheduled, existing pods will NOT be evicted
PreferNoSchedule: best efforts to not schedule pods
NoExecute: pods won't be scheduled and existing pods will get evicted

## Practice

### Taint a node
`kubectl taint nodes node01 app=red:NoSchedule`
or
`k taint node node01 env_type=production:NoSchedule`

## Remove a taint
`kubectl taint nodes node01 app=red:NoSchedule` or `kubectl taint nodes node01 app:NoSchedule-`

## Get taints for a node
`kubectl get node01 -o jsonpath={..taints}`

## Common mistakes

- does NOT ensure a pod gets scheduled to a specific node taint

- if a node goes down, the scheduler might prioritize the pod's survival and reschedule on a node without the taint matchign the pod toleration

- pod may get pre-empted and end up on a node without the taint matching the pod toleration