# KUBERNETES SECRETS

## Resources

- [Kubernetes secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
- [Kubernetes secret reference](https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/secret-v1/)

## Features

- supports many different secret types
- if whole secret volume is mounted in pod spec, each secret is mounted as a file

## Limitations
Note some of this is different if using an encryption provider like KMS, etc.

- secrets are NOT encrypted - only encoded
- secrets are NOT encrypted in etcd at rest
- access to pod / deployments namespace gives secret access

## Practice

### Base64 encode
`echo 'my_password' | base64`

### Base64 decode
`echo -n $MY_PASSWORD | base64 --decode`

### Example pod spec with env vars using an opaque secret

```sh
# generate secret
kubectl create secret generic example-secret \
  --from-literal=secret-key-1=value1 \
  --from-literal=secret-key-2=value2
```

```yml
apiVersion: v1
kind: Secret
metadata:
  name: example-secret
type: Opaque
data:
  secret-key-1: dmFsdWUx  # Base64 encoded value of "value1"
  secret-key-2: dmFsdWUy  # Base64 encoded value of "value2"
```

```yml
apiVersion: v1
kind: Pod
metadata:
  name: secret-env-pod
  labels:
    app: secret-env-example
spec:
  containers:
    - name: secret-env-container
      image: nginx:latest
      env:
        # Specify individual environment variables from a Secret
        - name: SECRET_ENV_VAR_1
          valueFrom:
            secretKeyRef:
              name: example-secret  # Name of the Secret
              key: secret-key-1     # Key in the Secret
        - name: SECRET_ENV_VAR_2
          valueFrom:
            secretKeyRef:
              name: example-secret
              key: secret-key-2
```

### Get all values from the secret as env's

```yml
apiVersion: v1
kind: Pod
metadata:
  name: secret-env-pod
  labels:
    app: secret-env-example
spec:
  containers:
    - name: secret-env-container
      image: nginx:latest
      envFrom:
        - secretRef:
            name: example-secret
```

### Verify env var secrets in a pod
Note: these are decrypted

`kubectl exec -it secret-env-pod -- env`

### Describe a secret

`kubectl describe secret example-secret`