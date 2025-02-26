# TERRAFORM CONSOLE

## Features
test out terraform functions, etc.

## Example

```bash
terraform console
> file("main.tf")
> length(var.region)
```

### Check workspace
`terraform.workspace`

### Lookup value in workspace
`lookup(var.ami, terraform.workspace)`