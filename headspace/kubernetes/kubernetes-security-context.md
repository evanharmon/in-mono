# KUBERNETES SECURITY CONTEXT

## Resources
- [Kubernetes pod security standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/)
- [Kubernetes configuring security context for a pod / container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)

## Features

- security settings can be configured at the pod or container level
- pod level settings are placed on all containers
- capabilities only supported at container level

## Docker security notes

### Namespacing & process isolation

- containers are not completely isolated from their hosts (diff from VMs)
- containers / host share the same kernel
- containers are isolated from one another by namespaces in linux
- host has it's own namespace

from container perspective, it's in it's own namespace and can only see it's own processes.
This is why the PID can be 1

For host, all docker processses of it's own and child namespaces are visible to it.
So on host, `ps aux` shows the command / process like `sleep 3600` in a container.

### Users

by default, docker runs processes in the container as the root user.
`root` will show both within the container and on the host.
Docker implements security features limiting the abilities of the root user in container.
It's not the same as root user in the host. Docker uses the base linux capabilities to achieve this.

full list of root user capabilities is located at `/usr/include/linux/capability.h`

user is often specified in the Dockerfile itself or on run

`docker run --user 1000 ubuntu sleep 3600`

```dockerfile
FROM ubuntu

USER 1000
```

example pod securityContext spec:

```yml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  securityContext: # pod level - applies to all containers
    runAsUser: 1000
  containers:
    - name: nginx
      image: nginx
```

example container securityContext spec:

```yml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: nginx
      image: nginx
      securityContext:
        runAsUser: 1000
        capabilities:
          add: ["MAC_ADMIN"]
```

### Add capabilities
additional capabilities can be added via docker run
`docker run --cap-add MAC_ADMIN ubuntu`

all privileges can be added via:
`docker run --privileged ubuntu`

### Drop capabilities
capabilities can be removed via docker run
`docker run --cap-drop KILL ubuntu`

### 