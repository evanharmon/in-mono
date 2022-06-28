# AWS STS ASSUME ROLE
get temporary security credentials. Typical use is for account or cross-account access.

## Resources
- [AWS STS AssumeRole Docs](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)

## Caveats
returned credentials cannot be used to with sts `GetFederationToken` or `GetSessionToken` calls.