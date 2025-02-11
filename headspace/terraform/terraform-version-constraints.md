# TERRAFORM VERSION CONSTRAINTS

## Resources
-  [Terraform version constraints](https://developer.hashicorp.com/terraform/language/expressions/version-constraints)

## Features
Set specific version constraints
- can be used in modules, providers, and `required_version` for terraform

## Examples

greater than:
`version = "> 1.2.0"`

greater than or equal:
`version = ">=1.2.0"`

less than:
`version = "< 1.2.0"`

less than or equal to:
`version = "<= 1.2.0"`

only bump patch versions:
`version = "~> 1.0.4"`

combined:
gt eq: 1.2.0
less than 2.0.0
NOT 1.5.0
`version = ">= 1.2.0, < 2.0.0, != 1.5.0"`