# AWS LAMBDA CENTRAL ACCOUNT TUTORIAL

use lambdas housed in a centralized AWS account

## Resources

- [AWS KB Lambda function assume role in another account](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-assume-iam-role/)
- [AWS Javascript SDK v3 AssumeRole](https://docs.aws.amazon.com/IAM/latest/UserGuide/example_sts_AssumeRole_section.html)

## Cross Account Lambda Execution

scenario where Lambda exists in a central account, but needs to access services in another account like S3

- create cross account role in OTHER non-centralized lambda account
- add inline policies to set permissions
- adjust lambda execution role to allow function to assume role in other account
- add trust relationship policy to cross-account role to allow lambda execution role to assume role

## Steps

see additional notes below for individual step details

Central Account:

- [x] create lambda function and IAM role (execution role)

Invoking Account:

- [x] create Cross Account IAM Role with trust relationship to Central Account

Central Account:

- [x] Lambda IAM execution role: add inline policy to allow function to assume IAM role in other AWS Accounts

Invoking Account:

- [x] Cross Account IAM role: adjust trust policy to assume lambda execution role ARN

Central Account:

- [x] add in AWS STS AssumeRole API call to lambda function code
- [x] test assumeRole with lambda console test event

## Central Account Lambda Function

blueprint: hello-world nodejs
auto generated lambda execution IAM role
IAM role will already have trusted entity of assumeRole - lambda service

in-line policy on Lambda Execution Role with Cross Account role ARN

```json
{
  "Version": "2012-10-17",
  "Statement": {
    "Effect": "Allow",
    "Action": "sts:AssumeRole",
    "Resource": "arn:aws:iam::222222222222:role/InvokeCentralAccountLambda"
  }
}
```

## Invoking Cross Account Role

arn:aws:iam::740000804123:role/service-role/hello-world-role-0c9v2vdj

trust policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::111111111111:role/service-role/hello-world-role-0c9v2vdj"
      },
      "Action": "sts:AssumeRole",
      "Condition": {}
    }
  ]
}
```
