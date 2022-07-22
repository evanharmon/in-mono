# AWS ACM CERT MANAGER

## Resources

- [AWS Certificate Manager ACM Docs](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)
- [AWS ACM Issuing and Managing Certificates](https://docs.aws.amazon.com/acm/latest/userguide/gs.html)

## Features

- ACM handles KMS in the background automatically per associated region

## Limitations

- ACM is a regional service
- non-global services like ALB need an ACM cert created in every region in use for the app
- have to be domain validated
- supports wildcard names like `*.example.com`

## Integrated AWS Services

- Elastic Load Balancing
- CloudFront
- Cognito
- Elastic Beanstalk
- App Runner
- API Gateway
- Nitro Enclaves
- CloudFormation
- Amplify
- OpenSearch Service

## Self Signed

Import with key
