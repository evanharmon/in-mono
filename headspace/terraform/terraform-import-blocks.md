# TERRAFORM IMPORT BLOCKS

## Resources
- [Terraform import blocks](https://developer.hashicorp.com/terraform/language/import)

## Features
allows importing a resource in HCL

## Limitations
- only allowed in root module :(

## Example

```conf
# must be in root module
import {
  to = aws_instance.example
  id = "i-abcd1234"
}

resource "aws_instance" "example" {
  name = "hashi"
  # (other resource arguments...)
}
```