# TERRAFORM HCL

## Resources
- [Terraform HCL Docs](https://developer.hashicorp.com/terraform/language/syntax/configuration)
- [HCL native spec syntax](https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md)
- [Terraform style guide](https://developer.hashicorp.com/terraform/language/style#code-formatting)

## Features
This doc is focused on HCL from the Terraform perspective.

## Comments
- `#`
- `//`
- `/* */`

## Arguments
`image_id = "abc123"`

## Resource types
prefix'd by the provider name
- `local_file`: provider is `local`, `file` is resource type
- `aws_instance`: `aws` is the provider, `instance` is the resource type

## Blocks
- can be identified by the curly braces

```hcl
// <BLOCK-NAME> <PROVIDER_RESOURCE-TYPE> <RESOURCE-NAME>
resource "aws_instance" "example" {
  // argument
  ami = "abc123"

  // nested block
  network_interface {
    # ...
  }
}
```