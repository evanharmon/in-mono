# OPENSSL RECIPES

## Generate self-signed root cert
good for internal use only. Skips the CSR step
```bash
openssl req -x509 -newkey rsa:4096 -days 365 \
  -keyout private.key -out cert.crt
```

## Generate self-signed cert with ca
generate key, csr, and sign with a CA cert/key
subject ends up being the username in audit logs - needs system:masters group
uses the self-signed CA or another CA

```sh
openssl genrsa -out admin.key 2048
openssl req -new -key admin.key -subject '/CN=kube-admin,/O=system:masters' -out admin.csr
openssl x509 -req -in admin.csr -CA ca.crt -CAkey ca.key -out admin.crt
