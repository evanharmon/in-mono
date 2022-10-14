# KUBERNETES ROLLOUT

## Resources

- [Kubernetes kubectl rollout docs](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout)

## Check status of deployment rollout

```console
kubectl rollout status deployment/my-app
```

## Check rollout history

```console
kubectl rollout history deployment/my-app
```

rollout revision details

```console
kubectl rollout history deployment/my-app --revision=3
```

## Rollback / undo a rollout

```console
kubectl rollout undo deployment/my-app --revision=3
```

to specific revision

```console
kubectl rollout undo deployment/my-app --revision=1
```
