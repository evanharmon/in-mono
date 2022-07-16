# AWS API GATEWAY LAMBDA AUTHORIZER

## Resources

- [AWS API Gateway DOCS Use Authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html)
- [AWS API Gateway Cognito Input Shape](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-lambda-authorizer-input.html)

### Lambda Authorizers

#### Deny Request

throw an error

#### Accept Request

must return this shape:

```json
{
  "principalId": "my-username",
  "policyDocument": {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "execute-api:Invoke",
        "Effect": "Allow",
        "Resource": "arn:aws:execute-api:us-east-1:123456789012:qsxrty/test/GET/mydemoresource"
      }
    ]
  },
  "context": {
    "org": "my-org",
    "role": "admin",
    "createdAt": "2019-01-03T12:15:42"
  }
}
```
