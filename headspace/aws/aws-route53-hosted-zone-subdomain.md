# AWS ROUTE53 HOSTED ZONE SUBDOMAIN

## Features
creating a new, separate hosted zone for a subdomain in route53
- this works cross-account

## Limitations
- this is more work than a route53 delegated set (which only work within an account)

## New hosted zone for subdomain with managed domain
1. create a separate, new hosted zone
- subdomain like `me.mydomain.com`
- immediately set a lower TTL like 1 hour on auto-generated NS

2. add new zone NS records to parent zone
adding subdomain NS records to parent zone delegates resolution to the subdomain zone
- copy NS records from sub domain zone
- create new NS record in parent zone for `subdomain.mydomain.com`

3. verify NS records
CAREFUL - don't do this too quick or you'll store the negative results in cache!

```bash
# negative results won't get cached
aws route53 test-dns-answer \
  --hosted-zone-id <SUBDOMAIN_HOSTED_ZONE_ID> \
  --record-name sub.example.com \
  --record-type A
```

4. Add A records
example - for local dev certs

create non-wildcard A record:
```
# `subdomain.mydomain.com A`
# leave name blank for subdomain non-wildcard record
name:
type: A
value: 127.0.0.1
ttl: 300s
```

create wildcard A record:
```
# `*.subdomain.mydomain.com A`
name: *
type: A
value: 127.0.0.1
ttl: 300s
```

5. Verify A records
CAREFUL - don't do this too quick or you'll store the negative results in cache!

```bash
# negative results won't get cached
aws route53 test-dns-answer \
  --hosted-zone-id <SUBDOMAIN_HOSTED_ZONE_ID> \
  --record-name sub.example.com \
  --record-type A
aws route53 test-dns-answer \
  --hosted-zone-id <SUBDOMAIN_HOSTED_ZONE_ID> \
  --record-name '*.sub.example.com' \
  --record-type A
```