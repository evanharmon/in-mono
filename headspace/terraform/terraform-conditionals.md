# TERRAFORM CONDITIONALS

## Resources

- [Terraform Conditionals Docs](https://www.terraform.io/docs/configuration-0-11/interpolation.html#conditionals)
- [Blog on Terraform Dynamic Blocks](https://lgallardo.com/2019/06/14/dynamic-blocks-in-terraform-0.12.x/)

## AND operation

```hcl
resource "null_resource" "example" {
  count = var.example_enabled && var.another_example == true ? 1 : 0

  provisioner "local-exec" {
    command = "echo This resource will only be created if both conditions are true"
  }
}
```

## NOT operation

`! var.somevar`

## OR operation

```hcl
# or
resource "null_resource" "example" {
  count = var.example_enabled || var.another_example == true ? 1 : 0

  provisioner "local-exec" {
    command = "echo This resource will be created if either of the conditions is true"
  }
}
```
## Conditional block

`name = "${local.env == "sandbox" ? "main-sandbox" : "main"}"`

## Conditional Dynamic Block

Can be used inside a resource, and inside a nested property object of a
resource

```hcl
dynamic "storage_data_disk" {
  for_each = var.create_metric_and_logging_data_disks ? [local.metric_and_logging_data_disk] : []
  content {
    name = storage_data_disk.value.name
    lun  = storage_data_disk.value.lun
    size = storage_data_disk.value.size
  }
}
```
