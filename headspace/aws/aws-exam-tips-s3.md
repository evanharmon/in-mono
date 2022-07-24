# AWS EXAM TIPS S3

## Classes

- `Standard-IA`, `Intelligent-Tiering`, `One Zone-IA` is min 30 days storage cost!

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
