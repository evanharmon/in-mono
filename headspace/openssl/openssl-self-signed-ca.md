# OPENSSL SELF SIGNED CERTIFICATE AUTHORITY

## Generate a self-signed CA
generate key, csr, and then sign.
self-signed because it's signed with it's own root key

```bash
openssl genrsa -out ca.key 2048
openssl req -new -key ca.key -subj '/CN=KUBERNETES-CA' -out ca.csr
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```