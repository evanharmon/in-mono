# TERRAFORM LIFECYCLES

## Resources
- [SO Terraform Autoscaling timeouts](https://stackoverflow.com/questions/44092511/terraform-autoscaling-group-destroy-timeouts)
- [Terraform Resources Docs](https://www.terraform.io/docs/configuration/resources.html)
- [Terraform lifecycle rule docs](https://developer.hashicorp.com/terraform/tutorials/state/resource-lifecycle)

## Features
Custom rules to fire on creation and destruction
- minimize potential downtime 

## Limitations
- terraform will destroy a resource before creating a new one by default
- just don't use `prevent_destroy` as it doesn't support any variable interpolation

## Timeouts
Handle timeout errors with autoscaling groups

```hcl
timeouts {
	create = "60m"
	delete = "2h"
}
```

## Prevent Resource Destroy
there are other options to prevent resources being destroyed like:
- sentinel policies
- adjusting assume_role IAM policies for prod / staging not to allow deletion of a resource type

doesn't support variable interpolation. A broken feature compared to pulumi's `protected` property.

```hcl
lifecycle {
  prevent_destroy = true
}
```

## Create before destroy
BEWARE - this can lead to lost resources depending on the resource name / contents.
Example: using this on a local file, without a well-known name, will result in no file existing after the destroy!
This is because the file is created - then destroyed on a terraform apply.
The behavior will chang on the next apply - as the resource doesn't exist to destroy. Gnarly to debug.

```hcl
lifecycle {
	create_before_destroy = true
}
```

## Ignore changes
helpful for values that change or when AWS auto adds stuff
Include map of resource attributes to ignore

```hcl
lifecycle {
	ignore_changes = [tags]
}
```