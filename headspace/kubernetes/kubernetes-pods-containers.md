# KUBERNETES PODS CONTAINERS

## Resources

- [Kubernetes pod containers exit codes](https://komodor.com/learn/exit-codes-in-containers-and-kubernetes-the-complete-guide/)

## Practice

### Set CMD arguments

```yml
apiVersion: v1
kind: Pod
metadata:
  name: ubuntu-sleeper
spec:
  containers:
    - name: ubuntu-sleeper
      image: ubuntu-sleeper
      # Override CMD
      args: ["10"]
```

### Override entrypoint

```yml
apiVersion: v1
kind: Pod
metadata:
  name: ubuntu-sleeper
spec:
  containers:
    - name: ubuntu-sleeper
      image: ubuntu-sleeper
      # Override entrypoint
      command: ["timeout"]
      args: ["10s", "tail", "-f", "/dev/null"]
```