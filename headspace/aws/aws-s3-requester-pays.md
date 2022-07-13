# AWS S3 REQUESTER PAYS

## Resources

- [AWS S3 Requester Pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html)
- [AWS S3 Requester Pays Configuring](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysExamples.html)
- [AWS S3 Requester Pays Restrictions and Limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html)

## Features

- supports bucket policy configuration

## Limitations

- anonymous access not allowed (duh)
- requires IAM authentication for requester
- `x-amz-request-payer` head is required

## Caveat

If you want another account in your org to pay, don't create an IAM role in
your own account and have it be used as a cross-account role. Your account will
still get charged