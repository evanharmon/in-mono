# FLASK HTTPS CERTBOT PLAYGROUND

## Resources
- [Partly inspired from this blog](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https)
- [Headspace route53-certbot-local-macos](../../../headspace/letsencrypt/route53-certbot-local-macos.md)

## Requirements

### Letsencrypt
`certbot register` should already have been run

### AWS cli
AWS cli should be installed and logged in to an account where the Route53 records exist.
certbot handles creating / deleting dns challenge records

### AWS Route53
Subdomain for hosted zone should already be setup with A records.
See my headspace article [headspace route53 subomdain hosted zone](../../../headspace/aws/aws-route53-hosted-zone-subdomain.md) for tips.

## Notes

### Flask
`flask run` isn't designed for using TLS certs on local development.
use `app.run()` with an explicit ssl_context is used instead.

### Privileged port 443
Most OS like macOS / Linux require sudo to run on port 443.
This app just runs on port 5000 in local dev

## Setup

use a venv
```bash
# I default to root of the repo .venv for simple python playgrounds
# alternatively, create a .venv in this folder instead
# `cd` to root of repo
python -m venv .venv
source .venv/bin/activate
# `cd` back to this dir with the README.md
pip3 install -r requirements.txt
```

## Commands
assumes you already have certs generated from letsencrypt

## Generate certs
all commands should run from this directory
```bash
# export AWS creds as environment variables for certbot
# adjust profile to the AWS config profile for route53
source ../../../scripts/aws_creds_export.sh <profile_name>
# dry-run certbot against staging
EMAIL=<email> DOMAIN=<sub.domain.com> ../../../scripts/certbot_certonly.sh staging
# create certs with certbot
EMAIL=<email> DOMAIN=<sub.domain.com> ../../../scripts/certbot_certonly.sh production
```

### Run server with certs

```bash
python3 app.py \
  --cert-file='/Users/<myuser>/local/letsencrypt/live/<local.mydomain.dev>/fullchain.pem' \
  --key-file='/Users/<myuser>/local/letsencrypt/live/<local.mydomain.dev>/privkey.pem'

# or set as more persistent env vars
CERT_FILE='/Users/<myuser>/local/letsencrypt/live/<local.mydomain.dev>/fullchain.pem'
KEY_FILE='/Users/<myuser>/local/letsencrypt/live/<local.mydomain.dev>/privkey.pem'
python3 app.py --cert-file=$CERT_FILE --key-file=$KEY_FILE
```