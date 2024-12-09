# KUBERNETES CERTIFICATES

## Resources
- [Kubernetes PKI certificate and requirements](https://kubernetes.io/docs/setup/best-practices/certificates/)
- [Kubernetes generating certificates manually](https://kubernetes.io/docs/tasks/administer-cluster/certificates/)
- [Kubernetes configure certificates for user accounts](https://kubernetes.io/docs/setup/best-practices/certificates/#configure-certificates-for-user-accounts)

## Management
if the kubernetes cluster / components are managed via as OS services, then the certs are manually generated
and managed. Example would be systemd.

If kubeadm was used to deploy / manage the cluster, then the certs are handled by kubeadm and the components are visible as Pods.

## Generate a self-signed CA
generate key, csr, and then sign.
self-signed because it's signed with it's own root key

```sh
openssl genrsa -out ca.key 2048
openssl req -new -key ca.key -subj '/CN=KUBERNETES-CA' -out ca.csr
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```

## Generate admin client certs
generate key, csr, and sign with a CA cert/key
subject ends up being the username in audit logs - needs system:masters group
uses the self-signed CA or another CA

```sh
openssl genrsa -out admin.key 2048
openssl req -new -key admin.key -subject '/CN=kube-admin,/O=system:masters' -out admin.csr
openssl x509 -req -in admin.csr -CA ca.crt -CAkey ca.key -out admin.crt
```

## Generate kube-apiserver certs

requires an openssl config file `openssl.conf` to support alternate names. IP addresses will be different.

```
[req]
req_extensions = v3_req
[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation,
subjectAltName = @alt_names
[alt_names]
DNS.1 = kubernetes
DNS.2 = kubernetes.default
DNS.3 = kubernetes.default.svc
DNS.4 = kubernetes.default.svc.local
IP.1 = 10.96.0.1
IP.2 = 172.17.0.87
```

```sh
openssl genrsa -out apiserver.key 2048
openssl req -new -key apiserver.key \
  -subject='CN=kube-apiserver' \
  -out apiserver.csr
openssl x509 -req -in apiserver.csr -CA ca.crt -CAkey ca.key -CAcreateserial \
  -out apiserver.crt --extensions v3_req -extfile openssl.conf -days 1000
```

## Generate kubelet certs
Certificates are named after the nodes, separate certs per node
certs are passed in to `KubeletConfiguration` resource

group / organization name format is: `system:nodes`
CN is in the format of `system:node:node01` by nodeName

## generate other system client certs
same as admin except the group / organization is differnet in the csr

- '/O=system:kube-scheduler'
- '/O=system:kube-controller-manager'
- '/O=system:kube-proxy'

## etcd
requires server, peer1, and peer2 certs

## Check certs

good old openssl

`openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout`

look at: `Issuer`, `Subject`, `Validity NotAfter`, and `X509v3 Subject Alternative Name`

inspect service logs `journalctl -u etcd.service -l`

or kubeadm logs: `kubectl logs etcd-master`

if kube-apiserver is down, rely on docker / crictl / nerdctl

`docker ps` to get container id, then
`docker logs containerid`