# LETSENCRYPT AWS ROUTE53 CERTBOT LOCAL MACOS

## Resources
- [Ilhicas blog on lets encrypt local with route53](https://ilhicas.com/2023/02/17/Letsencrypt-localhost.html)

## Features
local letsencrypt tls certs for development

## AWS ROUTE53

### Create hosted zone
- create new hosted zone for a subdomain like `me.mydomain.com`

### Create records
create non-wildcard A record:
```
name: # leave blank for subdomain non-wildcard record
type: A
value: 127.0.0.1
ttl: 300s
```

create wildcard A record:
```
name: # leave blank for subdomain non-wildcard record
type: A
value: 127.0.0.1
ttl: 300s
```

### Confirm records are available
```bash
# prefer AWS CLI so negative result don't get cached on nameserver!!!
aws route53 test-dns-answer \
  --hosted-zone-id <SUBDOMAIN_HOSTED_ZONE_ID> \
  --record-name sub.example.com \
  --record-type A
```

```bash
# CAREFUL - nameserver could cache negative results
dig +short me.mydomain.com A
dig +short '*.me.mydomain.com' A
```

## Certbot

### Setup

```bash
# source a venv so you don't use global
source .venv/bin/activate
pip3 install certbot
pip3 install certbot-dns-route53
# Verify
certbot plugins
```

### Create cert
careful: you can lock yourself out of generating prod certs with too many failures

```bash
# export aws session vars as env variables
output=$(aws configure export-credentials --profile profile --format env-no-export) \
  && for line in $output; do export $(echo "$line"); done
```

```bash
# dry-run against staging
certbot certonly \
  --dry-run \
  -n \
  --agree-tos \
  --email user@example.com \
  -d mydomain.dev \
  -d '*.mydomain.dev' \
  --dns-route53 \
  --preferred-challenges=dns \
  --logs-dir /tmp/letsencrypt \
  --config-dir ~/local/letsencrypt \
  --work-dir /tmp/letsencrypt
# against prod once you are sure
certbot certonly \
  -n \
  --agree-tos \
  --email user@example.com \
  -d mydomain.dev \
  -d '*.mydomain.dev' \
  --dns-route53 \
  --preferred-challenges=dns \
  --logs-dir /tmp/letsencrypt \
  --config-dir ~/local/letsencrypt \
  --work-dir /tmp/letsencrypt
```

### Renew cert

```bash
# export aws session vars as env variables
output=$(aws configure export-credentials --profile <profile> --format env-no-export) \
  && for line in $output; do export $(echo "$line"); done
```

```bash
certbot certonly \
  -d mydomain.dev \
  -d '*.mydomain.dev' \
  --dns-route53 \
  --preferred-challenges=dns \
  --logs-dir /tmp/letsencrypt \
  --config-dir ~/local/letsencrypt \
  --work-dir /tmp/letsencrypt
```

## Testing certs
look in the playgrounds - certs can be passed to a flask app, etc to check in browser