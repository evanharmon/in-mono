# AWS S3 TRANSFER ACCELERATION

bucket level acceleration

## Resources

- [AWS S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html)
- [AWS S3 Enable and Use Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration-examples.html)

## Features

- no charges if transfer did not result in an acceleration
- supports IPv4 and IPv6
- regular (non-accelerate) endpoint can still be used as well

## Limitations

- bucket level
- transfer acceleration must be enabled on bucket
- app must use `bucketname.s3-accelerate.amazonaws.com` endpoint / or configure in SDK?

## Utilizes CloudFront Edge Network

ex: (bucketname.s3-accelerate.amazonaws.com)
Uploads to a distinct URL to an edge location which then transfers to S3
