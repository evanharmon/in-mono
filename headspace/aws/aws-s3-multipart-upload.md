# AWS S3 MULTIPART UPLOAD

## Resources

- [AWS S3 Using Multipart Upload](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html)
- [AWS S3 Bucket Lifecycle Policy Abort Incomplete Multipart Uploads](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html)

## Recommendations

Use for objects over 100 MB

## Features

- improved throughput
- quick recovery from network issues
- pause and resume object uploads
- begin an upload before final object size known

## SDKs

SDKs are smart and handle the decision on whether to use multipart upload