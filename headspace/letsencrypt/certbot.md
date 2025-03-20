# LETSENCRYPT CERTBOT

## Resources
- [Certbot](https://certbot.eff.org/)

## Features
interacts with lets encrypt

## Install

### macOS
`brew install certbot`

### Python
```bash
pip3 install certbot
pip3 install certbot-dns-route53
```

## Commands

### Register an account

```bash
# non-root
certbot register --agree-tos --email user@example.com \
  --logs-dir /tmp/letsencrypt \
  --config-dir ~/.local/letsencrypt \
  --work-dir /tmp/letsencrypt
```

### Show account info
```bash
certbot show_account --email user@example.com \
  --logs-dir /tmp/letsencrypt \
  --config-dir ~/.local/letsencrypt \
  --work-dir /tmp/letsencrypt
```