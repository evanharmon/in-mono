# TERRAFORM FOR EXPRESSIONS

## Resources
- [Terraform for expressions](https://developer.hashicorp.com/terraform/language/expressions/for)

## Example

```hcl
variable "users" {
  type = map(object({
    is_admin = bool
  }))
}

locals {
  admin_users = {
    for name, user in var.users : name => user
    if user.is_admin
  }
  regular_users = {
    for name, user in var.users : name => user
    if !user.is_admin
  }
}
```