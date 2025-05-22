# TERRAGRUNT MODULES

## Features
Using modules in terragrunt
- supports tf modules locally, on registries, or git

## Hybrid module approach
- use community modules for best practices and common components
- use custom modules for app specific resources

## Wrapper module approach
custom module on top of a community module
- enforce standards on settings for community module
- can also limit features / changes

examples:
- always set variable name with addt'l prefix / suffix to keep it unique, etc
- enforce a naming convention

## Terragrunt Paths

double backslash `//` denotes the root directory of the repo

example: `./live/dev/myapp/terragrunt.hcl` accessing `./modules/mymodule`

```hcl
terraform {
  source = "../../..//modules/mymodule"
}
inputs = {}
```
