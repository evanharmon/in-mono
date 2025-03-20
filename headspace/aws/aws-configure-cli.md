# AWS CONFIGURE CLI

Notes on using the configure command to interact with shared credential files

## Resources

- [AWS CLI Docs](https://docs.aws.amazon.com/cli/latest/reference/configure/index.html#cli-aws-configure)
- [MFA Docs](https://aws.amazon.com/premiumsupport/knowledge-center/authenticate-mfa-cli/)

## Commands

### List Config Location For Profile

```sh
aws configure list --profile myprofile
```

### Export credentials
works for SSO / shared credentials as well

```bash
# output: process - JSON credentials object
aws configure export-credentials --profile myprofile
# output as exports
aws configure export-credentials --profile myprofile --format env
# output as non-exported shell vars
aws configure export-credentials --profile myprofile --format env-no-export
```

Still painful to export to shell... or another process
```bash
# export to shell with for loop
output=$(aws configure export-credentials --profile profile --format env-no-export) \
  && for line in $output; do export $(echo "$line"); done
