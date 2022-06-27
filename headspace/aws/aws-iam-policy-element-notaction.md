# AWS IAM POLICY ELEMENT NOTACTION

## Resources
- [AWS IAM NotAction Docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html)

## Benefits
- can result in shorter policy by listing only a few actions that should be allowed for the Resource

## NotAction with Allow
Matches all services and actions not listed. Can result in granting unintended permissions.

- any action NOT included is then allowed if the effect is set to `Allow`

### Example S3
allow all actions on S3 except `deleteBucket`

partial-policy
```json
{
    "Effect": "Allow",
    "NotAction": "s3:DeleteBucket",
    "Resource": "arn:aws:s3:::*",
}
```

### Example exclude IAM service

partial-policy
```json
{
    "Effect": "Allow",
    "NotAction": "iam:*",
    "Resource": "*"
}
```

## NotAction with Deny
Denies actions except what is listed in NotAction

### Example deny all non-IAM actions without MFA

```json
{
    "Version": "2012-10-17",
    "Statement": [{
        "Sid": "DenyAllUsersNotUsingMFA",
        "Effect": "Deny",
        "NotAction": "iam:*",
        "Resource": "*",
        "Condition": {"BoolIfExists": {"aws:MultiFactorAuthPresent": "false"}}
    }]
}
```