# TERRAFORM LIFECYCLES

Notes on handling timeouts and lifecycle type events with terraform resources

## Timeouts

Handle timeout errors with autoscaling groups

- [SO Terraform Autoscaling timeouts](https://stackoverflow.com/questions/44092511/terraform-autoscaling-group-destroy-timeouts)
- [Terraform Resources Docs](https://www.terraform.io/docs/configuration/resources.html)

```hcl
timeouts {
	create = "60m"
	delete = "2h"
}
```

## Prevent Resource Destroy

```hcl
lifecycle {
  prevent_destroy = true
}
```
