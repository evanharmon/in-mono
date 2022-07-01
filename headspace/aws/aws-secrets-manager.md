# AWS SECRETS MANAGER

## Resources

- [AWS Secrets Manager Docs](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
- [AWS Secrets Manager Best Practices](https://docs.aws.amazon.com/secretsmanager/latest/userguide/best-practices.html?icmp=docs_asm_console)
- [AWS Secrets Manager Authentication and Access Control](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html)
- [AWS Secrets Manager Rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html)


## Resource based policy
resource level policy supported through `permissions` policy on the secret
## Rotating Secrets
- rotation happens through lambda function
- automatic rotation support with RDS, DocumentDB, Redshift