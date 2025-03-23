# AWS SSO CLI

## Resources
- [AWS CLI SSO config for multiple accounts](https://community.aws/content/2kTOm98cSBaJ0t5NwGYHj790k4B/aws-sso-credentials-with-multiple-accounts?lang=en)

## Features
use SSO with the aws cli

## Commands

### Configure
have to configure AWS so use SSO
re-run the to add other accounts to config
```bash
aws configure sso
# session name will be the same across accounts
> SSO Session Name: my_user
# Use the <my_org>.awsapps.com/start url
> SSO Start URL: https://<my_org>.awsapps.com
> SSO region: us-east-1
> SSO registration scopes: sso:account:access
# login will happen
> Choose account
# Choose role if multiple available..
> Choose role
# Set CLI Default region
> us-east-1
# Set profile name if you don't like the default <Role>-AccountID
# can always change later in the config file
> Choose CLI profile name...
```

### Login
`aws sso login --sso-session <my_user>`

### Logout
`aws sso logout`
