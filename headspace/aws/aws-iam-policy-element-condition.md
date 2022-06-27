# AWS IAM POLICY ELEMENT CONDITION

## Resources
- [AWS IAM Condition Docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html)

## Caveats
condition key names are not case-sensitive.

## IAM MFA Example
allows removing MFA if logged in within the last hour

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Sid": "AllowRemoveMfaOnlyIfRecentMfa",
        "Effect": "Allow",
        "Action": [
            "iam:DeactivateMFADevice",
            "iam:DeleteVirtualMFADevice"
        ],
        "Resource": "arn:aws:iam::*:user/${aws:username}",
        "Condition": {
            "NumericLessThanEquals": {"aws:MultiFactorAuthAge": "3600"}
        }
    }
}
```