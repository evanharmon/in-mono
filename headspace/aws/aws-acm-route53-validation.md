# AWS ACM CERT MANAGER ROUTE53 VALIDATION

## Create cert in ACM

assuming us-east-1 region unless needed specifically for a non-global AWS resource

## ACM Validation

After creating cert, record the cname name and value from ACM console

```csv
Domain Name,Record Name,Record Type,Record Value
*.evanharmon.link,_1aaceed7797d2e68ad3798e8c81b91b7.evanharmon.link.,CNAME,_fb44447986fce2be22bce0d472e22cb1.zxwlrjxpwn.acm-validations.aws.
```

## Route53 Validation

use the ACM validation information to create a new CNAME record in Route53
or use the handy `create records in route53` ACM console button if Route53
managed in same account

```
cname: _1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.evanharmon.link.
value: _faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.zzzzzzzzzz.acm-validations.aws.
```
