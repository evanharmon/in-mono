# AWS S3 EVENT NOTIFICATIONS

## Resources

- [AWS S3 Event Notifications Docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html)
- [AWS S3 Event Notification Message Structure](https://docs.aws.amazon.com/AmazonS3/latest/dev/notification-content-structure.html)

## Destinations

- SNS
- SQS
- LAMBDA
- EventBridge

## Limitations

- delivery can take a minute or longer with versioning enabled
- SNS FIFO not supported

## Event Types

```
s3:TestEvent

s3:ObjectCreated:*
s3:ObjectCreated:Put
s3:ObjectCreated:Post
s3:ObjectCreated:Copy
s3:ObjectCreated:CompleteMultipartUpload

s3:ObjectRemoved:*
s3:ObjectRemoved:Delete
s3:ObjectRemoved:DeleteMarkerCreated
```
