# AWS ROUTE53 CLI

## Commands

### Check propogation without caching negative results

```bash
# negative results won't get cached
aws route53 test-dns-answer \
  --hosted-zone-id <SUBDOMAIN_HOSTED_ZONE_ID> \
  --record-name sub.example.com \
  --record-type A
```