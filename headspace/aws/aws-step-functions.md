# AWS STEP FUNCTIONS

serverless orchestration service to chain lambda functions

## Resources

- [AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html)
- [AWS Step Functions Service Integrations Chart](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-services.html#connect-to-services-integration-patterns)
- [AWS Step Functions Sample Projects](https://docs.aws.amazon.com/step-functions/latest/dg/create-sample-projects.html)
- [AWS Step Functions Standard vs Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html)

## Limitations

- max execution time one year
- latency as Lambda functions are chained together
- no native integration with AWS Mechanical Turk

## Invoke Methods

- AWS Console
- AWS SDK
- AWS CLI
- AWS Lambda
- API Gateway
- Eventbridge
- CodePipeline
- other Step Functions
- CloudWatch Events
