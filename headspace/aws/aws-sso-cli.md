# AWS SSO CLI

## Resources
- [AWS CLI SSO config for multiple accounts](https://community.aws/content/2kTOm98cSBaJ0t5NwGYHj790k4B/aws-sso-credentials-with-multiple-accounts?lang=en)

## Features
use SSO with the aws cli

## Credentials
after login, credentials are stored in `~/.aws/sso/cache` in JSON files.

not a typical format:
- startUrl
- region
- accessToken
- clientId
- clientSecret
- registrationExpiresAt
- refreshToken

Not a known place / format for SDK's - so usually have to make another call.
export as env vars or assume a role

```bash
# if no ~/.aws/config exists
aws sso get-role-credentials \
  --access-token 'aaaa' \
  --account-id 111111111111 \
  --role-name admin
# output will be json and can be passed in to a lot of SDK's?
# roleCredentials: {"accessKeyId":"","secretAccessToken":"","sessionToken":"","expiration":""}
```

```bash
# or with ~/.aws/config and the profile / sso already setup and export as env vars
output=$(aws configure export-credentials --profile myprofile --format env-no-export) \
  && for line in $output; do export $(echo "$line"); done
```

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
