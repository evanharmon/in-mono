# LOCALSTACK TERRAFORM AWS

## Provider setup
- AWS Provider has to point to the localstack endpoint
```hcl
provider "aws" {
  region = "us-east-1"
  skip_credentials_validation = true
  skip_requesting_account_id = true

  endpoints {
    iam = "http://localhost:31000"
  }
}
```