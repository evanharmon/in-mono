# KUBERNETES KUSTOMIZE REPLACEMENTS

## Resources
- [Kustomize docs patches / replacements](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/#customizing)

## Features
Replace entire sections of a manifest
- inject (replace) values into containers
- use config values from other objects
- helps not hard-code things like service names as they may change

## Examples

## Replace an entire pod template in a deployment

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Replacement
metadata:
  name: replace-deployment-template
spec:
  patches:
  - path: spec/template
    value: |
      metadata:
        labels:
          app: new-app
      spec:
        containers:
        - name: my-container
          image: new-image:latest
```
`kustomize build --replacements=replacement.yaml deployment.yaml`
