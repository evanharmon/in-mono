# KUBERNETES KUSTOMIZE COMPONENTS

## Resources

- [Kustomize components GH example](https://github.com/kubernetes-sigs/kustomize/blob/master/examples/components.md)
- [GCP Online Boutique GH kustomize components example](https://github.com/GoogleCloudPlatform/microservices-demo/blob/main/kustomize/README.md)

## Features
Reusable config for use across multiple overlays
- supports both resources, patches, etc.
- supports optional features in only specific overlays

## Example

files are included in a `./components` folder

with a `kustomization.yaml` like:

./components/my-component
```yaml
apiVersion: kustomize.config.k8s.io/v1alpha1
kind: Component

resources:
- example-depl.yaml

patches:
- example-patch.yaml
```

overlay `kustomization.yaml` file can reference them:

```yaml
components:
- ../../my-component
```