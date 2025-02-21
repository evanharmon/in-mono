# TERRAFORM REMOTE BACKEND

## Resources
- [Terraform s3 bucket /dynamodb for state walkthrough](https://spacelift.io/blog/terraform-aws-s3-bucket)
- [Terraform S3 Backend Github Issue](https://github.com/hashicorp/terraform/issues/13690)

## Examples

### Assume Role With S3 Remote Backend


```hcl
terraform {
  backend "s3" {
    encrypt      = "true"
    bucket       = "myapp-terraform-remote-state-stg"
    key          = "myapp/terraform.tfstate"
    role_arn     = "arn:aws:iam::999999999999:role/service-role/my-service-role"
    session_name = "my-service-role"
  }

  # introduction of Local Values configuration language feature
  required_version = ">= 0.10.3"
}
```

### S3 backend with dynamodb locking table

```hcl
# Configure the AWS provider
provider "aws" {
  region = "us-west-2"
}

# Create a DynamoDB table for locking
resource "aws_dynamodb_table" "terraform_lock" {
  name           = "terraform-lock"
  key_schema     = [["ID", {"Sattribute": "s"}]]
  attribute_definitions = [{"Attribute Name": "ID", "Attribute Type": "S"}]
  table_status    = "ACTIVE"

  # Use a single replica for simplicity, but you may want to use more in a production environment
  num_replicas   = 1

  read_capacity_units = 5
  write_capacity_units = 5
}

# Configure the Terraform backend to use DynamoDB
terraform {
  backend "dynamodb" {
    bucket       = "my-terraform-state"
    key          = "terraform.tfstate"
    region       = "us-west-2"
    table_name   = aws_dynamodb_table.terraform_lock.name
  }
}
```