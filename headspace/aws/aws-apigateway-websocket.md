# AWS APIGATEWAY WEBSOCKET
used to distribute and control API to individual customers

## Resources

- [AWS API Gateway Websocket](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html)

## Features
Usage Plans and API Keys with quota / throttling is how this is done

## Limitations
- does not support binary frames in message payloads, there is a workaround but its not true binary
- have to manage connections table yourself in something like DynamoDB