# AWS S3 BUCKET POLICY

## Resources

- [Bucket policies and user policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-iam-policies.html)

## Limitations

- aws:SourceIP condition CANNOT be a private IP aka from inside a VPC
- sourceVPC or sourceVPCEndpoint both require VPC endpoint

## List Of Actions

differs from IAM!

- [S3 Bucket Policy Actions](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html)
- [S3 Bucket Policy Conditions](https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html)
- [S3 Policy Role Conditions](https://docs.aws.amazon.com/cognito/latest/developerguide/iam-roles.html)
- [Allow Cross-Account Bucket Access](https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/)
- [Enforce Object Ownership To Bucket Owner](https://aws.amazon.com/blogs/aws/amazon-s3-update-three-new-security-access-control-features/)

## Prevent Bucket Lockout

S3 Buckets can be locked out by incorrect / inadvertent changes to the bucket policy

## Testing / Debugging Best Practices

- Keep a base policy in at all times to prevent lockout
- Use a separate AWS account for testing where you have ROOT access

## Invalid Action Errors

#### `s3:PutAccountPublicAccessBlock` and `s3:GetAccountPublicAccessBlock`.

Both only support the `*` as Resource

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "statement1",
      "Effect": "Allow",
      "Action": ["s3:GetAccountPublicAccessBlock"],
      "Resource": ["*"]
    }
  ]
}
```

#### `s3:PutBucketObjectLockConfiguration`

bucket level resource! does not support sub resources
