# KUBERNETES FAILURES APPLICATIONS

## Resources
- [Kubernetes troubleshooting applications](https://kubernetes.io/docs/tasks/debug/debug-application/)

## Common Examples to debugging
from CKA courses

### Web app with service and db

1. Check accessibility
- is web service available on node?
`curl http://web-service-ip:node-port`

2. Check web service status
- checking pod to service discovery, look for endpoints
`kubectl describe service web-service`
- compare selectors on pod against service

3. Check pod
`kubectl get pod`
- check events for restarts, etc
`kubectl describe pod web`
- check the pod logs
`kubectl logs web`
if it's crashing / restarting, may need to follow and view previous
`kubectl logs web -f --previous`

4. Check dependent services
per this contrived example, make sure db pod has connectivity and is listening
```bash
bash -c "echo > /dev/tcp/localhost/5432 && echo 'Listening' || echo 'Not Listening'"
```
- check the db service for restarts, label matching, etc
`kubectl describe service db-service`
- check endpoints port / targetPort mappings
`kubectl get ep`
- check the pod logs
`kubectl logs db -f --previous`
- check that other pods are using correct svc name, env / args in specs.containers[*].env