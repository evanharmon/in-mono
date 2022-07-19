# AWS SNS

pub sub push notification serverless service

## Resources

- [AWS SNS Docs](https://docs.aws.amazon.com/sns/latest/dg/welcome.html)

## Features

- messages stored across multiple AZs
- push-based delivery (no polling)
- inexpensive, pay as you go

## Limitations

- no data retention
- standard topic limits max 30,000 messages per second (us-east n. virginia)
- standard topic limits max 9,000 messages per second (us-west oregon)
- standard topic limits max 1,500 messages per second (us-east ohio)

## Delivery Options

- SMS text message
- Email
- SQS
- Lambda functions
- HTTP Endpoints

## Topics

- like an 'access point' allows recipients to dynamically subscribe for
  identical copies of the same notification
- a topic can support deliveries to multiple endpoint types at the same time:
  ie. SMS, email, iOS

## Pricing

$0.50 per 1 million
then $0.06 per 100,000 deliveries over HTTP
then $0.75 per 100 deliveries over SMS
then $2.00 per 100,000 deliveries over Email
