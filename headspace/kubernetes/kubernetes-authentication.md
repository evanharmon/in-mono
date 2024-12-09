# KUBERNETES AUTHENTICATION

## Resources

## Best Practices

- don't use static password or token file methods
- setup RBAC for all new users
- use a volume mount for any auth files with kubeadm

## User Types
app end user authentication is usually handled by the app itself, not directly through k8s

- admins
- developers
- bots

## User Accounts
kubernetes does not manage user accounts. Uses certificates, or files, or external authenication providers.
Authentication happens in kube-apiserver which can reference:

- static password file
- static token file
- certificates
- identity services

### Static password file
obviously not a good idea for security.

uses a .csv format with `password,username,userid,group`. group field is optional

```csv
supersecretpassword,evan,u0001,devs
```

passed in to kube-apiserver with the flag `--basic-auth-file=user-details.csv`

use against kube-apiserver in a curl:

```sh
curl -vk \
  https://controlplane-node-ip:6443/api/v1/pods \
  -u 'evan:supersecretpassword'
```

### Static token file
obviously not a good idea for security.

uses a .csv format with `token,username,userid,group`. group field is optional

```csv
Zkjblahblah,evan,u0001,devs
```

passed in to kube-apiserver with the flag `--basic-token-file=user-token-details.csv`

use against kube-apiserver in a curl:

```sh
curl -vk \
  https://controlplane-node-ip:6443/api/v1/pods \
  -H 'Authorization: Bearer Zkjblahblah'
```

### curl request as kubernetes admin

```sh
curl -vk \
  https://kube-apiserver:6443/api/v1/pods \
  --key admin.key --cert admin.crt --cacert ca.crt
```

## Service Accounts
machine-to-machine communication. Kubernetes does mananage them natively.