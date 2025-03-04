# OPENSSL X509

## Check expiry and subject info on cert

`openssl x509 -in /var/lib/kubelet/worker-1.crt -text -noout`

## View Thumbprint

`openssl x509 -in CERT_FILE -serial -noout`

## View Serial

`openssl x509 -in CERT_FILE -fingerprint -noout`

## Sign CSR and create cert
`openssl x509 -req -in admin.csr -CA ca.crt -CAkey ca.key -out admin.crt`