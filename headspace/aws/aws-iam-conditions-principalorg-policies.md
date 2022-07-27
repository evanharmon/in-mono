# AWS ORGANIZATIONS IAM PRINCIPALORG POLICIES

## Resources

- [AWS Organizations IAM PrincipalOrgID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalorgid)
- [AWS Organizations IAM PrincipalOrgPath](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principalorgpaths)

## Features

- better than listing out all the AWS accounts

## Limitations

- global condition applies to management account
- can block AWS services like CloudTrail if not explicitly allowed!!

## Limit S3 Bucket Access by PrincipalOrgID

```json
{
  "Version": "2012-10-17",
  "Statement": {
    "Sid": "AllowPutObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:PutObject",
    "Resource": "arn:aws:s3:::policy-ninja-dev/*",
    "Condition": { "StringEquals": { "aws:PrincipalOrgID": "o-xxxxxxxxxxx" } }
  }
}
```

## PrincipalOrgPath Condition Example

```json
    "Condition": {
        "ForAnyValue:StringLike": {
            "aws:PrincipalOrgPaths": [
                "o-a1b2c3d4e5/r-ab12/ou-ab12-33333333/*",
                "o-a1b2c3d4e5/r-ab12/ou-ab12-22222222/*"
            ]
        }
    }
```
