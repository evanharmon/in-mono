# AWS LAMBDA

## Resources

- [AWS Lambda Docs](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [AWS Sample Events Published](https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-api-gateway-request)
- [AWS Lambda Unzip Large Files In Lambda With Streaming](https://medium.com/@johnpaulhayes/how-extract-a-huge-zip-file-in-an-amazon-s3-bucket-by-using-aws-lambda-and-python-e32c6cf58f06)
- [AWS Lambda Configuration Docs](https://docs.aws.amazon.com/lambda/latest/dg/configuration-console.html)
- [AWS Lambda Investigating Spikes](https://aws.amazon.com/blogs/compute/investigating-spikes-in-aws-lambda-function-concurrency/)

## Limitations

- RAM 128MB up to 10,240MB
- CPU scales with RAM increase

```
Lambda allocates CPU power linearly in proportion to the amount of memory configured. At 1,792 MB, a function has the equivalent of one full vCPU (one vCPU-second of credits per second).
```

## Pricing
per ms

## Logs

shows memory allocated and memory actually used

# S3 Put sample template

change Records[].s3.bucket.name
adjust arn above it to match

change Records[].s3.key to file

## ID (Static)

every published version has an ID

## Qualifiers (Named Pointers)

You can move the qualifier around as 'prod'
default is \$LATEST

## Create Qualifier

Create Alias action