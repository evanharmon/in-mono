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

```console
kubectl logs -lapp=api
```
