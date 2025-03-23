# TERRAFORM FILES VERSIONS

## Features
use `versions.tf` to store all the `terraform {}` block config
- store provider versions here

## Examples

### AWS

```
# versions.tf
terraform {
  required_version = ">= 1.6.0"

  cloud {
    organization = "my-org"

    workspaces {
      name = "my-workspace"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
```
