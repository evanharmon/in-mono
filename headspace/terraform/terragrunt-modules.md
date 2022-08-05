# TERRAGRUNT MODULES

### Terragrunt Paths

double backslash `//` denotes the root directory of the repo

example: `./live/dev/myapp/terragrunt.hcl` accessing `./modules/mymodule`

```hcl
terraform {
  source = "../../..//modules/mymodule"
}
inputs = {}
```
