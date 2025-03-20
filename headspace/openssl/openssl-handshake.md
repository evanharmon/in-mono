# OPENSSL HANDSHAKE

## Check handshake
```bash
# should show handshake info
openssl s_client -connect local.mydomain.dev:443 -servername local.mydomain.dev
# should then say
> read R BLOCK
# then eventually closed since server didn't send any data
> CLOSED
```