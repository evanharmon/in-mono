# AWS S3 ACCESS POINTS
for use in a single region

## Resources
- [S3 Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html)
- [S3 Access Point Policy Examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-policy-examples)
- [AWS Blog S3 Access Point with VPC Endpoints](https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/)

## IAM Policies
Restrictions on access point only apply to requests made thru access point
- allow control of access point by resource / users
- both access point and underlying bucket must permit the request

## Limitations
- Sigv4 required when making requests to access point
- can only perform operations on S3 objects
- each access point is for a specific bucket, account, and region. use multi-region access-points for multiple regions