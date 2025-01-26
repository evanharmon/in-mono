# KUBERNETES KUBECTL ROLLOUT

## Resources

- [Kubernetes kubectl rollout docs](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout)

## Commands

### Check status of deployment rollout

`kubectl rollout status deployment/my-app`

### Check rollout history

`kubectl rollout history deployment/my-app`

rollout revision details

`kubectl rollout history deployment/my-app --revision=3`

### Rollback / undo a rollout

`kubectl rollout undo deployment/my-app --revision=3`

to specific revision

`kubectl rollout undo deployment/my-app --revision=1`
