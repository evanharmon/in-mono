# KUBERNETES SECRETS STORE CSI DRIVER

## Resources
- [Kubernetes secrets store csi driver](https://secrets-store-csi-driver.sigs.k8s.io/concepts.html#provider-for-the-secrets-store-csi-driver)
- [Kodekloud Kubernetes secrets store csi driver tutorial](https://www.youtube.com/watch?v=MTnQW9MxnRI)
- [Kubernetes aws secrets provider installation](https://github.com/aws/secrets-store-csi-driver-provider-aws?tab=readme-ov-file#installatioN)

## Features

- credentials are no longer stored in kubernetes secrets
- minimizes attack surface
- supports auto rotation

## Practice

### AWS secrets manager example

```yml
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: db-secrets
spec:
  provider: aws
  parameters:
    objects: |
      - objectName: "db-creds"
        objectType: "secretsmanager"
```

```yml
apiVersion: v1
kind: Pod
spec:
  volumes:
    - name: db-creds
      csi:
        driver: secrets-store.csi.x-k8s.io
        readOnly: true
        volumeAttributes:
          secretsProviderClass: db-secrets
  containers:
    - name: nginx
      image: nginx
      volumeMounts:
        - name: db-creds
          mountPath: /tmp
```

### Helm install

```sh
helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts
helm install csi-secrets-store secrets-store-csi-driver/secrets-store-csi-driver --namespace kube-system
```

### Aws provider install

```sh
kubectl apply -f https://raw.githubusercontent.com/aws/secrets-store-csi-driver-provider-aws/main/deployment/aws-provider-installer.yaml
```