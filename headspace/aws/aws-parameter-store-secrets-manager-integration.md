# AWS PARAMETER STORE SECRETS MANAGER INTEGRATION

## Resources
- [Docs access secrets manager from parameter store](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html)

## Limitations
parameter cannot use versioning or history features

## CLI Example
```console
aws ssm get-parameter \
    --name /aws/reference/secretsmanager/s1-secret \
    --with-decryption
```