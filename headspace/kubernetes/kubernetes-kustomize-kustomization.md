# KUBERNETES KUSTOMIZE KUSTOMIZATION FILE

## Resources
- [Kustomize kustomization docs](https://kubectl.docs.kubernetes.io/references/kustomize/glossary/#kustomization)

## Features
`kustomization.yaml` is the config file driving kustomize.
- placed inside the k8s folder or sub folders alongside yaml files
- lists all kubernetes manifests for kustomize to manage
- lists transformations
- overlays can contain new resources that only exist in one env - like prod

## Folder structures

### Single folder format without overlays

simple example without nested folders
```
k8s/
  kustomization.yaml
  ...yaml
```

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
# resources to be managed by kustomize
resources:
- nginx-deployment.yaml
- nginx-service.yaml
# customizations to be made
# add a common label example - tons more available
commonLabels:
  company: EPH
```

### Overlays Nested folder format


```
k8s/
  base/ # shared config
    kustomization.yaml
    api/
      kustomization.yaml
      ... yaml files
    db/
      kustomization.yaml
      ... yaml files
  overlays/ # overwrite or new resources for each environment
    dev/
      # the api/ and db/ folders dont have to match the base if its overkill
      kustomization.yaml
      api/
        kustomization.yaml
        ... yaml files
      db/
        kustomization.yaml
        ... yaml files
    staging/
      kustomization.yaml
      api/
        kustomization.yaml
        ... yaml files
      db/
        kustomization.yaml
        ... yaml files
    prod/
      kustomization.yaml
      api/
        kustomization.yaml
        ... yaml files
      db/
        kustomization.yaml
        ... yaml files
```

base/kustomization.yaml
```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
# resources to be managed by kustomize
resources:
- api/
- db/
# customizations to be made
```

base/*/kustomization.yaml
```yaml
resources:
  - deployment.yaml
  - service.yaml
```

overlays/*/kustomization.yaml
```yaml
resources:
- ../../base
# patches, transformers, replacements, etc
```

`kubectl kustomize` can be run in the following directories:
./base - to check base yamls
./overlay/dev, ./overlay/staging, ./overlay/prod
`kubectl kustomize` CANNOT be run from the base of the folder and include overlays / transformations / patches, etc

## Build
The below command does not apply or deploy any kubernetes resources

pass the folder to build for kustomize
- must have `kustomization.yaml` file
- will generate yaml with transformations
- will traverse subfolders if base kustomization.yaml lists the dirs

`kubectl kustomize build k8s/`

then the generated folder could be passed separately to generate resources
`kubectl apply -f k8s/`

## Build AND pass to kubectl

`kubectl kustomize build k8s/ | kubectl apply -f -`

## Delete kustomize generated resources
`kubectl kustomize build k8s/ | kubectl delete -f -`