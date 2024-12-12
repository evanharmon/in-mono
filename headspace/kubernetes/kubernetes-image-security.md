# KUBERNETES IMAGE SECURITY

## Resources
- [Kubernetes private registry](https://kubernetes.io/docs/concepts/containers/images/#using-a-private-registry)
- [Kubernetes secret via existing credentials](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#registry-secret-existing-credentials)

## Features

- providers available for authenticating to cloud provider registries
- kubelet on worker nodes uses secrets to pull private images

## Image naming
image format is `registry/account/image`
if no registry is specified, the default is `docker.io`
if no account is specified, the default is `library`

`image: nginx` is actually re-written to `image: docker.io/library/nginx`

## Docker registry secret
below well-known `docker-registry` secret only works for single private registry

```yml
kubectl create secret docker-registry <name> \
  --docker-server=DOCKER_REGISTRY_SERVER \
  --docker-username=DOCKER_USER \
  --docker-password=DOCKER_PASSWORD \
  --docker-email=DOCKER_EMAIL
```

## Create secret based on existing credentials

```sh
kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
    --type=kubernetes.io/dockerconfigjson
```

## Example image pull from private registry for pod

```yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: my-private-registry.io/apps/internal-app
  imagePullSecrets:
    - name: regcred
```