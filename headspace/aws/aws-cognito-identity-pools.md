# AWS COGNITO IDENTITY POOLS
Notes on setup and use of oauth2 federated third party login providers such as
facebook, google, and amazon

## Resources

- [Identity Pool Auth Flow](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html)
- [Assume Preferred Role](https://docs.aws.amazon.com/cognito/latest/developerguide/role-based-access-control.html)
- [Role-Based Access Control](https://docs.aws.amazon.com/cognito/latest/developerguide/role-based-access-control.html)
- [Identity Pools Google Developer Guide](https://docs.aws.amazon.com/cognito/latest/developerguide/google.html)

### Refresh Tokens

- [AWS](https://forums.aws.amazon.com/thread.jspa?threadID=241503)

Refresh tokens DO NOT auto refresh when app gets new limited time credentials
Refresh tokens cannot be refreshed manually
There is no way to invalidate refresh tokens!

#### Identity Pool Setup

- create identity pool
- create authorized and unauthorized roles, with policies and trusts

## Policies

### Policy Conditions

`cognito-identity.amazonaws.com:amr` contains more text than authentication
status. Use `ForAnyValue:StringLike` to match only the
authentication status

```json
{
  "ForAnyValue:StringLike": {
    "cognito-identity.amazonaws.com:amr": "unauthenticated"
  }
}
```

### Policy Examples

#### Basic Unauthorized Role Policy

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

#### Basic Unauthorized Role Trust Relationship

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "cognito-identity.amazonaws.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "cognito-identity.amazonaws.com:aud": "us-west-2:eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee"
        },
        "ForAnyValue:StringLike": {
          "cognito-identity.amazonaws.com:amr": "unauthenticated"
        }
      }
    }
  ]
}
```

#### Basic Authorized Role Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "mobileanalytics:PutEvents",
        "cognito-sync:*",
        "cognito-identity:*"
      ],
      "Resource": ["*"]
    }
  ]
}
```

#### Basic Unauthorized Role Trust Relationship

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "cognito-identity.amazonaws.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "cognito-identity.amazonaws.com:aud": "us-west-2:eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee"
        },
        "ForAnyValue:StringLike": {
          "cognito-identity.amazonaws.com:amr": "authenticated"
        }
      }
    }
  ]
}
```