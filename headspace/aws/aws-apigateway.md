# AWS API GATEWAY

## Resources

- [AWS API Gateway Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [AWS API Gateway REST or HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)

## Features

- per-client throttling
- request validation
- authorization
- WAF integration
- private API endpoints
- SSL cert support with Route53 CNAME

## Limitations

- 29 second timeout
- 10 MB max payload size

## Integrations

- HTTP
- Lambda
- AWS Service (ex. expose Step function, post to sqs, etchttps://responsively.app/download)

## Endpoint Types

- edge-optimized (default)
- regional
- private

## API Types

- REST (more features)
- vanilla HTTP without features (regional)
