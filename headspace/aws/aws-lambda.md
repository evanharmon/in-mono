# AWS LAMBDA

## Resources

- [AWS Lambda Docs](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [AWS Sample Events Published](https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-api-gateway-request)
- [AWS Lambda Unzip Large Files In Lambda With Streaming](https://medium.com/@johnpaulhayes/how-extract-a-huge-zip-file-in-an-amazon-s3-bucket-by-using-aws-lambda-and-python-e32c6cf58f06)
- [AWS Lambda Configuration Docs](https://docs.aws.amazon.com/lambda/latest/dg/configuration-console.html)
- [AWS Lambda Investigating Spikes](https://aws.amazon.com/blogs/compute/investigating-spikes-in-aws-lambda-function-concurrency/)
- [AWS Lambda FAQs](https://aws.amazon.com/lambda/faqs/)

## Features

- pricing per ms
- CPU scales with RAM increase
- recommended to over-provision on memory (and hence cpu)

## Limitations

- RAM 128MB up to 10,240MB
- max of 250 MB unzipped deployment package including any layers

```
Lambda allocates CPU power linearly in proportion to the amount of memory configured. At 1,792 MB, a function has the equivalent of one full vCPU (one vCPU-second of credits per second).
```

## Logs

shows memory allocated and memory actually used
