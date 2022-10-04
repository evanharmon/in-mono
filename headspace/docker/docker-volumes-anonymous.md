# DOCKER ANONYMOUS VOLUMES

## Features

- tied to specific containers
- prevents re-use?
- good for things like `node_modules`, etc to speed up / avoid copy

## Limitations

- volume deleted when container is deleted
- not intended for sharing across containers?

## Remove Anonymous volume automatically

```console
docker run --rm -v /foo busybox top
```
