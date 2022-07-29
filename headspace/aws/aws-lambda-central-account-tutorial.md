# AWS LAMBDA CENTRAL ACCOUNT TUTORIAL

use lambdas housed in a centralized AWS account

## Cross Account Lambda Execution

scenario where Lambda exists in a central account, but needs to access services in another account like S3

- create cross account role in OTHER non-centralized lambda account
- add inline policies to set permissions
- adjust lambda execution role to allow function to assume role in other account
- add trust relationship policy to cross-account role to allow lambda execution role to assume role

## Steps

- [ ] Lambda Function: create Lambda and IAM role (execution role) in central account
- [ ] Lambda IAM role: add lambda service as trusted entity if not already there
- [ ] Lambda IAM role: add inline policy to allow function to assume IAM role in other AWS Accounts

## Central Account Lambda

blueprint: hello-world nodejs
auto generated lambda execution IAM role
IAM role will already have trusted entity of assumeRole - lambda service
