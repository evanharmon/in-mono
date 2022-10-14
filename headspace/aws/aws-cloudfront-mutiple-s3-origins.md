# AWS CLOUDFRONT MULTIPLE S3 ORIGINS

## Resources

- [AWS CloudFront Multiple Origin S3 Buckets](https://aswinkumar4018.medium.com/amazon-cloudfront-with-multiple-origin-s3-buckets-71b9e6f8936)

# Limitations

- CF always passes path to s3 bucket unless lambda@edge re-writes used

## Additional S3 Bucket setup

the non-default behavior origin MUST use store the files with an additional folder path

example:

`https://d2222222222222.cloudfront.net/21-day-challenge/index.html`

will make a request to the 21-day-challenge s3 bucket for the path

`/21-day-challenge/index.html`

solution is to upload bundle with an additional path of `21-day-challenge`

## Troubleshoot 403 errors

TEMPORARILY add a `s3:ListBucket` permission to CF to test

```json
{
  "Version": "2008-10-17",
  "Id": "PolicyForCloudFrontPrivateContent",
  "Statement": [
    {
      "Sid": "DELETE_ME_TEST_FOR_404",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::eph-music.webapp-pocs.21-day-challenge-us-east-1",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::111111111111:distribution/E2222222222222"
        }
      }
    }
  ]
}
```
