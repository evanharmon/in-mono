# TERRAFORM MODULES

## Resources
- [Terraform module docs](https://developer.hashicorp.com/terraform/language/modules)

## Features
modules containing grouped resources for terraform
- every project has a root module
- root modules can call child / published modules
- modules offer standardized config and simplify re-use

## Best practices

## Opinionated modules
Modules don't have to just be for re-usability.
A module can be an opinionated grouping of resources with hard-coded values.
Offers a way to effectively create a `subfolder`.
Although they often live in a grouped `modules` directory together - not as full subfolders

## Example
```hcl
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "my-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  enable_vpn_gateway = true

  tags = {
    Terraform   = "true"
    Environment = "dev"
  }
}
```

## Commands
embedding here as the commands are so simple

### Get modules
`terraform get`
