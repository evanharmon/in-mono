# AWS S3 SECURITY

## Resources

- [AWS S3 Server Side Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)
- [AWS S3 Client Side Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html)


## Limitations

- sse-kms will lower scalability as KMS quota limits will throttle before S3 limits

## Securing Access tools
Bucket Policies
Access Control Lists (ACL)

## Security
Uploads are private by default
new buckets are private by default

## Logs
buckets can log to another bucket, even another AWS account

## Encryption In Transit
SSL/TLS

## Encryption Server-Side At Rest AES-256
S3 Managed Keys (SSE-S3)
AWS manages the master keys and rotates
AWS Key Management Service Managed Keys (SSE-KMS)
Server-side encryption with customer provided keys (SSE-C)

## Encryption Client-Side At Rest
Client library such as Amazon S3 Encryption
