# AWS SECURITY TOKEN SERVICE STS CLI

## Resources

- [AWS STS CLI](https://docs.aws.amazon.com/cli/latest/reference/sts/)

## Commands

### Check Identity

get information about current IAM entity

`aws sts get-caller-identity`

### Set ENV Variable From Get-Session-Token

```bash
export AWS_SESSION_TOKEN="$(aws sts get-session-token | jq '.Credentials.SessionToken')"
```

### Configure mfa session token

```bash
aws sts get-session-token \
  --serial-number arn-of-the-mfa-device \
  --token-code code-from-token
```
