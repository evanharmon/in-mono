# KUBERNETES DEPLOYMENTS

## Resources

- [Kubernetes Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

## Create Deployment

```console
kubectl create deployment my-app --image=
```

## Create deployment from file

```console
kubectl apply -f my-deployment.yaml
```

## check deployments

```console
kubectl get deployments
```

## Delete deployment

```console
kubectl delete deployment my-app
```

```console
kubectl delete -f=my-deployment.yaml
```
