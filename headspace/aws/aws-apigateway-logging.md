# AWS API GATEWAY LOGGING

## Resources

- [AWS API Gateway CloudWatch Logging for a REST Api](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html)
- [AWS API Gateway Logging to Kinesis Data Firehose](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-logging-to-kinesis.html)
- [AWS API Gateway Logging Xray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html)

## Features

- integrates with CloudWatch
- integreates with Kinesis Data Firehose
- integrates with Xray
- can log full request / response by turning additional feature

## Execution Logs

api gateway manages the CloudWatch Logs

includes:

- request / response paramater values / payloads
- data used by Lambda Authorizers
- API keys required
- usage plan enabled or not

## Access Logs

you decide the access logging details such as:

- $context variables

make sure to include $context.requestId and $context.extendedRequestId

- $input NOT supported for logging
