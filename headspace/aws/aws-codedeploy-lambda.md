# AWS CODE DEPLOY LAMBDA

## Resources

- [AWS CodeDeploy Lambda Deployments](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-lambda.html)
- [AWS CodeDeploy Lambda with SAM Tutorial](https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-lambda-sam.html)

## Features

- supports blue / green deploy via versions / alias
- supports pre and post traffic hook validations (additional lambdas)
- integration with SAM
- automated rollback with CloudWatch Alarms

## Traffic Shift

options:
- canary
- linear
- all-at-once