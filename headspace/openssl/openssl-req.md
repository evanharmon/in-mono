# OPENSSL REQ

## Features
generate a request. Lots of options on this subcommand
- `--noenc` skips asking for password, not recommended though

## Create certificate signing request (csr)

```sh
openssql req -new -key example.key -out example.csr \
  -subj "/C=US/ST=CA/O=MyOrg, Inc./CN=mydomain.com"
```

## View certificate signing request (csr)
`openssl req -in evan.csr -text -noout`

## Generate private key and csr
`openssl req -newkey rsa:2048 -keyout key.pem -out req.pem`
