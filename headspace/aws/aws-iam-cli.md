# AWS IAM CLI

## Create role

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["mobileanalytics:PutEvents", "cognito-sync:*"],
      "Resource": ["*"]
    }
  ]
}
```

```console
aws iam create-role \
  --role-name hss-auth-unauthorized \
  --assume-role-policy-document file://policies/cognito-unauthorized-trust.json
```

## Attach an inline role policy

```bash
aws iam put-role-policy \
  --role-name hss-auth-unauthorized \
  --policy-name unauthorized \
  --policy-document file://policies/cognito-unauthorized.json
```

## Attach role policy

```bash
aws iam attach-role-policy \
  --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess \
  --role-name LimitCheckRole
```

## Change password

```bash
aws iam update-login-profile \
  --user-name myusername \
  --password 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' \
  --no-password-reset-required
```

## Get account alias

`aws sts list-account-aliases`

## Create user and access key

```bash
aws iam create-user --user-name eksuser
aws iam create-access-key --user-name iamuser-eksuser | tee /tmp/access_output.json
```
