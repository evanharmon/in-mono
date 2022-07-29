# AWS STS ASSUME ROLE

## Resources

- [AWS STS AssumeRole Docs](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)

## Features

- get temporary security credentials
- typical use is for account or cross-account access.

## Caveats

returned credentials cannot be used to with sts `GetFederationToken` or `GetSessionToken` calls.

## Limitations

- CANNOT attach an existing IAM policy to a role with STS at assumeRole call
