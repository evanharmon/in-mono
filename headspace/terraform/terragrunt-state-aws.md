# TERRAGRUNT STATE AWS

## Resources
- [New stacks terragrunt recommended folder structure](https://github.com/gruntwork-io/terragrunt-infrastructure-live-stacks-example)

## Features
using aws s3 / dynamodb for state management of terraform

## Example remote state with providers
includes providers and remote_state

```hcl
# terragrunt.hcl or root.hcl
remote_state {
  backend = "s3"
  config = {
    encrypt        = true
    bucket         = "my-infra-state-1111111111"
    key            = "${path_relative_to_include()}/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
  }
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
}

generate "provider" {
  path      = "providers.tf"
  if_exists = "overwrite_terragrunt"
  contents  = <<EOF
provider "aws" {
  region  = "us-east-1"
}
EOF
}

generate "provider_version" {
  path      = "versions.tf"
  if_exists = "overwrite_terragrunt"
  contents  = <<EOF
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
EOF
}
```
