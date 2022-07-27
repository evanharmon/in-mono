# AWS IAM CROSS ACCOUNT ROLES

## Resources

- [AWS IAM Cross Account Roles Tutorial](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html)

## Steps

- create cross account role in new account
- add inline policies to set permissions
- add trust relationship policy with other AWS account
- add assumeRole iam policy to IAM group

## Cross Account Lambda Execution

scenario where Lambda exists in a central account, but needs to access services in another account like S3

- create cross account role in OTHER non-centralized lambda account
- add inline policies to set permissions
- adjust lambda execution role to allow function to assume role in other account
- add trust relationship policy to cross-account role to allow lambda execution role to assume role
