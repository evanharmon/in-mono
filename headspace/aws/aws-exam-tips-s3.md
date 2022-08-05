# AWS EXAM TIPS S3

## Bucket Creation

- takes up to 24 hours for bucket to propogate to all regions - use regional endpoint!!
- watch out for HTTP 307 - means the bucket hasn't propogated - use regional endpoint!!

## Classes

- `Standard-IA`, `Intelligent-Tiering`, `One Zone-IA` is min 30 days storage cost!

## Glacier Classes

S3 Glacier Instant Retrieval is 68% cheaper than `Standard-IA`

## Pricing

- `Standard` is $0.023 per GB-month

## Charges

- NO charge to transfer data IN to S3

## Replication

- S3 replication uses same storage class as source object
- supports replication from s3 bucket in to glacier in DIFFERENT region via lifecycle rules

## Event Notifications

- notification configuration can be specific to PUT / POST / COPY / Delete
- DOES NOT show permissions level setting of object, for that use CloudTrail / CloudWatch Event / SNS

## Client File Isolation

valid strategy is to create an IAM user for each client and set the IAM policy to only allow their IAM name prefix for bucket

## Parallel Querying

- keep the file sizes at least 128MB!!

## Access Points

- used for separate permissions per accessor
- separate DNS and separate bucket policy
- helpful to avoid complex s3 bucket policy

## Cross Account Access Point to Shared S3 Bucket

- create vpc gateway endpoint in Account A
- create vpc access point in Account B where s3 bucket lives
- point vpc gateway endpoint in Account A to vpc access point in Account B
