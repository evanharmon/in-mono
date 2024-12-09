# OPENSSL GENERAL

## Generate RSA Private Key

```sh
openssl genrsa -out example.key 2048
```

## Generate RSA public key

```sh
openssl rsa -in example.key -pubout > example.pem
```

## Create certificate signing request (csr)

```sh
openssql req -new -key example.key -out example.csr \
  -subj "/C=US/ST=CA/O=MyOrg, Inc./CN=mydomain.com"
```

## View certificate signing request (csr)
```sh
openssl req -in evan.csr -text -noout
```

## Decode Base64

```sh
openssl base64 -d -in <infile> -out <outfile>
```

## Encode Base64

```sh
openssl base64 -in <infile> -out <outfile>
```

## View Thumbprint

```sh
openssl x509 -in CERT_FILE -serial -noout
```

## View Serial

```sh
openssl x509 -in CERT_FILE -fingerprint -noout
```
