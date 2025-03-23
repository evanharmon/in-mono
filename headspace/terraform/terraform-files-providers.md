# TERRAFORM FILES PROVIDERS

## Features
use `providers.tf` to store the named providers

## Examples

### Single account aws

```conf
# providers.tf
provider "aws" {
  region = var.aws_region
}
```

### Multiple aws accounts

```conf
provider "aws" {
  alias = "primary"
  region = "us-east-1"
}

provider "aws" {
  alias = "replica"
  region = "us-west-2"
  assume_role {
    role_arn = "arn:aws:iam::123456789012:role/YourRole"
    session_name = "TerraformSession"
  }
}

resource "aws_db_instance" "primary" {
  provider = aws.primary
  # ...
}

resource "aws_db_instance" "read_replica" {
  provider = aws.replica
  # ...
}
```