# AWS XRAY

## Resources

- [AWS XRAY SNS Tracing](https://docs.aws.amazon.com/xray/latest/devguide/xray-services-sns.html)
- [AWS XRAY Instrument NodeJS](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-tracing.html)

## Features

- supports EC2 via agent
- supports ECS via agent
- Lambda
- API Gateway
- Beanstalk (agent automatically installs)

## Lambda

### Trace AWS SDK

```console
const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const s3 = new AWS.S3()
```
