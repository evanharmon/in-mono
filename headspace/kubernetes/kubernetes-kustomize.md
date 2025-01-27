# KUSTOMIZE

## Resources

- [Kustomize docs](https://kustomize.io/)
- [Kustomize GH Docs](https://github.com/kubernetes-sigs/kustomize/tree/master/docs)
- [Kustomize More Docs](https://kubectl.docs.kubernetes.io/pages/reference/kustomize.html)

## Features
enables setting a base config, and then customizing for multiple environments.
- avoids the need to have separate yaml files per environment like `dev, staging, prod`
- available via `kubectl kustomize`
- creates final manifests
- no templating knowledge required
- stays as yaml

## Base config
base configuration that is identical across all environments
- default values as well

## Overlays
different values across environments
- overlays/dev, overlays/staging, overlays/prod, etc
- will often have additional YAML resources as they wouldn't make sense in `base` ex: config-map.yaml

## Folder structure
example:
k8s/
  base/ # shared config
    kustomization.yaml
    ... yaml files
  overlays/ # overwrite or new resources for each environment
    dev/
      kustomization.yaml
      ... yaml files
    staging/
      kustomization.yaml
      ... yaml files
    prod/
      kustomization.yaml
      ... yaml files

## Installation

### macOS
comes included in kubectl but may not be the latest version

`brew install kustomize`

### Binary

`curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | bash`

### golang

`go get sigs.k8s.io/kustomize/kustomize/v3@v3.2.3`
