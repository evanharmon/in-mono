# TERRAFORM STATE

## Features
state is created on first `terraform apply`
- stored locally in a file called `.terraform.tfstate`
- also can be stored in s3 bucket, with dynamodb locking on runs, etc
- maps known configuration of existing infrastructure for checking against state
- TF can make changes then based on drift / updates