# TERRAFORM CLI PLAN

## Resources
- [Terraform Plan Docs](https://www.terraform.io/docs/commands/plan.html)

## Commands

### Generate plan and save to file
`terraform plan -out=tfplan`

### Pass Variables To Plan

`terraform plan -out=tfplan -var env=sandbox`

### Limit Plan To Modules

`terraform plan -out=tfplan --target=module.appsync`

## Common issues

### Outputs Not Updating

`terraform plan` will show no changes. Instead run `terraform refresh`

### Review Stale Plan

`terraform show tfplan`
