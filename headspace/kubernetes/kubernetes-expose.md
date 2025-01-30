# KUBERNETES EXPOSE

## Resources

- [Kubectl Expose CLI Docs](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#expose)

## Expose deployment

only to cluster:

`kubectl expose deployment my-app --type=ClusterIP --port=8080`

external via node:

`kubectl expose deployment my-app --type=NodePort --port=8080`

via load balancer:

`kubectl expose deployment my-app --type=LoadBalancer --port=8080`
