# TERRAFORM WORKSPACES

## Resources

- [Terraform Workspaces Docs](https://www.terraform.io/docs/state/workspaces.html)

## Features
Allows multiple workspaces / resources to be generated based on same configuration
- `default` is the main workspace always in use and can't be changed
- limited to backends that support multiple workspaces
- configuration STILL has just one backend
- workspace folders visible in `./terraform.tfstate.d/<workspace_name>` directory

## Limitations
THESE are not the same as Terraform Cloud workspaces!!!
- not appropriate for system decomposition
- not appropriate for deploys requiring separate creds and access controls

## Workspace Commands

### List workspaces
`terraform workspace list`

### Select workspace
`terraform workspace select default`

### Create workspace
`terraform workspace new sandbox`

## Reference workspace in variables

```hcl
variable "region" {
  type = map(any)
  default = {
    "us-app"    = "us-east-1"
    "eu-app"    = "eu-west-1"
  }
}
```
`var.region[terraform.workspace]`