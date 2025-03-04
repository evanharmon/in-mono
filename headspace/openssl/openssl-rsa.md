# OPENSSL RSA

## Generate RSA Private Key

```sh
openssl genrsa -out example.key 2048
```

## Generate RSA public key

```sh
openssl rsa -in example.key -pubout > example.pem
```
