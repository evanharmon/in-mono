# AWS S3 GLACIER FLEXIBLE RETRIEVAL

used where portions of the data may need to be retrieved in minutes

## Resources

- [AWS S3 Glacier Docs](https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html)

## Features

- supports 1 - 5 minute expedited retrival for a fee
- supports standard retrieval in 3 - 5 hours for a fee
- free bulk retrievals available in 5 - 12 hours
- objects remain in S3 and not accessed with s3 glacier service

## Limitations

- not available for real-time access
- requires a restore action
- requires a minimum storage of 90 days