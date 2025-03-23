# TERRAFORM PROVIDERS AWS

## Features
aws for terraform

## Passing credentials
- export AWS_* env vars
- export `AWS_PROFILE` - not my preferred way
- pass `AWS_PROFILE` to terraform cli
- shared config / credentials files

## Limitations
- `aws sso login` does not work with setting provider.aws.profile
- `aws sso login` does not work with setting `aws_profile = <>` in `terraform.tfvars`

## Commands

### Local exec with an aws sso role
```bash
# export env vars
output=$(aws configure export-credentials --profile profile --format env-no-export) \
  && for line in $output; do export $(echo "$line"); done
# or pass profile explicitly
AWS_PROFILE=<profile> terraform plan
```

## Example provider configs

### Use shared config / credentials

```conf
provider "aws" {
  shared_config_files      = ["path_to_config"]
  shared_credentials_files = ["path_to_credentials"]
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