# AWS CONFIGURATION

## Recipes

### Set Up Role Switching

Edit config file to add new profile for role

```
[profile hss-prod]
role_arn = arn:aws:iam::prodaccount#:role/rolename
source_profile = hss-dev
mfa_serial = arn:aws:iam::devaccount#:mfa/username
```

### Set Config From STS ASSUME_ROLE YAML

```yaml
export ROLE_ARN='arn:aws:iam::123456789012:role/myrole'
aws --output json sts assume-role --role-arn $ROLE_ARN --role-session-name role-arn > custom_creds.json
- aws configure set region us-east-1 --profile myprofile
- >
aws configure set aws_access_key_id
`/root/bin/jq -r '.Credentials.AccessKeyId' custom_creds.json` --profile myprofile
- >
aws configure set aws_secret_access_key
`/root/bin/jq -r '.Credentials.SecretAccessKey' custom_creds.json` --profile myprofile
- >
aws configure set aws_session_token
`/root/bin/jq -r '.Credentials.SessionToken' custom_creds.json` --profile myprofile
```

### Set Config From \$AWS_CONTAINER

```yaml
- >
  curl -qL -o aws_credentials.json
  http://169.254.170.2/$AWS_CONTAINER_CREDENTIALS_RELATIVE_URI >
  aws_credentials.json
- aws configure set region $AWS_REGION
- >
  aws configure set aws_access_key_id
  `/root/bin/jq -r '.AccessKeyId' aws_credentials.json`
- >
  aws configure set aws_secret_access_key
  `/root/bin/jq -r '.SecretAccessKey' aws_credentials.json`
- >
  aws configure set aws_session_token
  `/root/bin/jq -r '.Token' aws_credentials.json`
```