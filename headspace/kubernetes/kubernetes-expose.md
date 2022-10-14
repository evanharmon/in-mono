# KUBERNETES EXPOSE

## Resources

- [Kubectl Expose CLI Docs](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#expose)

## Expose deployment

only to cluster

```console
kubectl expose deployment my-app --type=ClusterIP --port=8080
```

external via worker node

```console
kubectl expose deployment my-app --type=NodePort --port=8080
```

via load balancer

```console
kubectl expose deployment my-app --type=LoadBalancer --port=8080
```
