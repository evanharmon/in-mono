# AWS S3 BUCKET POLICY

## Resources
- [S3 bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html)
- [S3 MFA bucket policy example](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-7)
- [S3 condition key examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html)

## Deny Multiple AND Conditions

[AWS Forum Post](https://forums.aws.amazon.com/thread.jspa?messageID=603265)
Allow IP controlled access to s3 bucket hosted website and CDN access.

```
When specifying conditions with different tag identifiers the conditions are
considered separate. By default, conditions are evaluated with an AND when
combined in a single statement. In order to perform an OR action across
different conditions you need to put them in separate statements
```

```json
{
  "Version": "2012-10-17",
  "Id": "IPAccessControl",
  "Statement": [
    {
      "Sid": "PublicReadBucketObjects",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "${bucket_arn}/*",
      "Condition": {
        "NotIpAddress": {
          "aws:SourceIp": ["1.1.1.1"]
        },
        "ArnNotLike": {
          "aws:PrincipalArn": "${origin_access_identity_arn}"
        }
      }
    }
  ]
}
```

## Default CORS

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
      <AllowedOrigin>*</AllowedOrigin>
      <AllowedMethod>GET</AllowedMethod>
      <MaxAgeSeconds>3000</MaxAgeSeconds>
      <AllowedHeader>*</AllowedHeader>
  </CORSRule>
</CORSConfiguration>
```

## Limit Bucket Access To CloudFront

- [AWS Bucket Policy Example](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-6)

```json
{
  "Version": "2012-10-17",
  "Id": "PolicyForCloudFrontPrivateContent",
  "Statement": [
    {
      "Sid": " Grant a CloudFront Origin Identity access to support private content",
      "Effect": "Allow",
      "Principal": {
        "CanonicalUser": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::examplebucket/*"
    }
  ]
}
```

## Limit Object Access To Cognito Identity Pool Id

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": ["s3:ListBucket"],
      "Effect": "Allow",
      "Resource": ["arn:aws:s3:::mybucket"],
      "Condition": {
        "StringLike": {
          "s3:prefix": ["${cognito-identity.amazonaws.com:sub}/*"]
        }
      }
    },
    {
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::mybucket/${cognito-identity.amazonaws.com:sub}/*"
      ]
    }
  ]
}
```

## Allow Another Account User Access To Bucket

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::AccountB:user/AccountBUserName"
      },
      "Action": ["s3:GetObject", "s3:PutObject", "s3:PutObjectAcl"],
      "Resource": ["arn:aws:s3:::AccountABucketName/*"]
    }
  ]
}
```

## Allow Another Assumed Role Access To Bucket

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::AccountB:role/RoleName"
      },
      "Action": ["s3:GetObject", "s3:PutObject", "s3:PutObjectAcl", "s3:List*"],
      "Resource": [
        "arn:aws:s3:::AccountABucketName/*",
        "arn:aws:s3:::AccountABucketName"
      ]
    }
  ]
}
```
