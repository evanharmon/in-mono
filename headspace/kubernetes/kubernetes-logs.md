# KUBERNETES LOGS

## View Logs By Selector

Example Selector YML:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-deployment
  labels:
    app: myapp
spec:
  selector:
    matchLabels:
      app: api
```

`kubectl logs -lapp=api`

## Grab specific logs from pod and save to file
example: grab INFO and ERROR logs
`kubectl logs mypod | grep -E '(INFO|ERROR)' > /tmp/mypods.logs`
