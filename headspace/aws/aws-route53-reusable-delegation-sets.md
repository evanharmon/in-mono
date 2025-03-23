# AWS ROUTE53 REUSABLE DELEGATION SET

## Resources
- [AWS Route53 reusable delegation set](https://docs.aws.amazon.com/cli/latest/reference/route53/create-reusable-delegation-set.html)

## Features
reusable NS record set that can be associated with hosted zones within an account.
- can be passed to new hosted zone on creation

## Benefits
Means you don't have to create a new hosted zone then:
- copy NS record set
- create NS record set in parent hosted zone pointing to other hosted zone

## Limitations
- cross-account not supported
- privates zones not supported
- can't be created in AWS Console