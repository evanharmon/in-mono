#!/usr/bin/env bash

# Usage:
# Staging - dry run
# EMAIL=evan@email.com DOMAIN=subdomain.mydomain.dev ./certbot_certonly.sh staging
# Production lets encrypt api
# EMAIL=evan@email.com DOMAIN=subdomain.mydomain.dev ./certbot_certonly.sh production

set -euo pipefail

# Colors for echo's
RED="\033[91m"
GREEN="\033[92m"
BLUE="\033[94m"
NC="\033[0m"

EMAIL="${EMAIL:-"me@email.com"}"
DOMAIN="${DOMAIN:-"dev.mydomain.dev"}"
CONFIG_DIR="${CONFIG_DIR:-"$HOME/local/letsencrypt"}"
LOGS_DIR="${LOGS_DIR:-"/tmp/letsencrypt"}"
WORK_DIR="${WORK_DIR:-"/tmp/letsencrypt"}"

api_environment=${1:-"staging"}

# Check for required binaries and variables
if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
  echo -e "$RED Must be logged in to AWS with AWS_* variables exported $NC"
  exit 1
fi

if [ -z "$VIRTUAL_ENV" ]; then
  echo -e "$RED Virtual environment should be set $NC"
  exit 1
fi

if ! command -v certbot &> /dev/null; then
  echo -e "$RED certbot command not found $NC"
  exit 1
fi

if [ "$api_environment" == "production" ]; then
  echo -e "$GREEN ---------------- Running PROD Certbot certonly ---------------- $NC"
  certbot certonly \
    -n \
    --agree-tos \
    --email "$EMAIL" \
    -d "$DOMAIN" \
    -d "*.$DOMAIN" \
    --dns-route53 \
    --preferred-challenges=dns \
    --logs-dir "$LOGS_DIR" \
    --config-dir "$CONFIG_DIR" \
    --work-dir "$WORK_DIR"
elif [ "$api_environment" == "staging" ]; then
  echo -e "$GREEN ---------------- Running STAGING Certbot certonly as dry-run ---------------- $NC"
  certbot certonly \
    --dry-run \
    -n \
    --agree-tos \
    --email "$EMAIL" \
    -d "$DOMAIN" \
    -d "*.$DOMAIN" \
    --dns-route53 \
    --preferred-challenges=dns \
    --logs-dir "$LOGS_DIR" \
    --config-dir "$CONFIG_DIR" \
    --work-dir "$WORK_DIR"
else
  echo -e "$RED first arg must be production or staging $NC"
fi

echo -e "$BLUE ---------------- Scripts available at: $CONFIG_DIR ---------------- $NC"
ls -la "$CONFIG_DIR/live/$DOMAIN"
