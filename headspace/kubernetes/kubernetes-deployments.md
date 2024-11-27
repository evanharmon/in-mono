# KUBERNETES DEPLOYMENTS

## Resources

- [Kubernetes Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

## Features

- rolling updates
- rollbacks
- handles replicasets internally

## Practice

### Get deployments
`kubectl get deployments` or `kubectl get deploy`

### Create Deployment

`kubectl create deployment my-app --image=nginx`

### Create deployment from file

`kubectl apply -f my-deployment.yaml`

### Generate deployment yaml file

`kubectl create deploy nginx --image=nginx --dry-run=client -o yaml`

### check deployments

`kubectl get deploy`

### Delete deployment

`kubectl delete deploy my-app`

`kubectl delete -f my-deployment.yaml`

### Get all deploy / replicaset / pods
`kubectl get all -l app=my-app`

## Common Issues
