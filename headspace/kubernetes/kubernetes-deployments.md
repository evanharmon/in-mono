# KUBERNETES DEPLOYMENTS

## Resources
- [Kubernetes Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

## Features
use for apps that are STATELESS
- rolling updates
- rollbacks
- handles replicasets internally
- pods get random identities (NOT ordered)

## Use cases
web apps, APIs, microservices, etc

- application is stateless
- pods can be replaced anytime without needing a stable identity
- no requirement for ordered startup / shutdown of pods
- no need for persistent storage

## Rollout strategies

- Recreate: leads to downtime
- RollingUpdate: default, uses replicasets under the hood

## Commands

### Get deployments
`kubectl get deployments` or `kubectl get deploy`

### Create Deployment
`kubectl create deployment my-app --image=nginx`

### Create deployment from file
`kubectl apply -f my-deployment.yaml`

### Generate deployment yaml file
`kubectl create deploy nginx --image=nginx --dry-run=client -o yaml`

### Generate deployment yaml from existing deployment
`kubectl get deployment <deployment-name> -o yaml | sed '/status:/,$d' > deployment.yaml`

### Check deployments
`kubectl get deploy`

### Delete deployment
`kubectl delete deploy my-app`

`kubectl delete -f my-deployment.yaml`

### Get all deploy / replicaset / pods
`kubectl get all -l app=my-app`

### Get rollout status
`kubectl rollout status deployment/myapp-deployment`

### Get rollout history
`kubectl rollout history deployment/myapp-deployment`

### Set image and trigger deployment update
`kubectl set image deployment/mydeployment nginx=nginx:1.9.1`

or `kubectl edit deployment/mydeployment`

### Rollout new deployment update
`kubectl apply -f deployment-definition.yml`

### Rollback
`kubectl rollout undo deployment/myapp-deployment`
