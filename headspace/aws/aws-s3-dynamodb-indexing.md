# AWS S3 DYNAMODB INDEXING
S3 doesn't provide it's own indexing feature set.
DynamoDB is a common method to do this yourself

## Resources

- [AWS S3 Managing Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

## Example Indexing Architecture

S3 Event -> Lambda -> DynamoDB

## Use Cases

- tracking total S3 usage by prefix such as user / collection / etc
- search by date or within date range