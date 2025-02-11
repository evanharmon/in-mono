# TERRAFORM LOCALS

## Resources
- [Terraform locals docs](https://developer.hashicorp.com/terraform/language/values/locals)

## Features
Avoids needing to repeat the same value / expression multiple times.
- assigns a name to an expression
- like a function's temporary local variables
- can be re-used across a module
- valus are reference like `local` is an object

## Best Practices
- appropriate for values used in multiple places AND are likely to change often

## Examples

### Basic use
```hcl
locals {
  # Ids for multiple sets of EC2 instances, merged together
  instance_ids = concat(aws_instance.blue.*.id, aws_instance.green.*.id)
}

locals {
  # Common tags to be assigned to all resources
  common_tags = {
    Service = local.service_name
    Owner   = local.owner
  }
}
```

### Ephemeral values

when used with variables

```hcl
variable "service_name" {
  type    = string
  default = "forum"
}

variable "environment" {
  type    = string
  default = "dev"
}

variable "service_token" {
  type      = string
  ephemeral = true
}

locals {
  service_tag   = "${var.service_name}-${var.environment}"
  session_token = "${var.service_name}:${var.service_token}"
}
```