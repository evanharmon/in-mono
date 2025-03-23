# TERRAFORM VARIABLES

## Resources

- [Terraform variables docs](https://www.terraform.io/docs/configuration/variables.html)
- [Terraform types and value](https://developer.hashicorp.com/terraform/language/expressions/types)

## Features
normally stored in a `variables.tf` file
- offers a `default` value
- variables can be stored in a file with extension `.tfvars` or `.tfvars.json`
- files with suffixes of `.auto.tfvars` and `.auto.tfvars.json` will auto load
- `terraform apply` will prompt for variables
- `terraform plan` will error if variables not set

## Best practices
- include the `type` and `description`

## Loading order of variables
1. Environment specific variables
2. `terraform.tfvars` file
3. `*.auto.tfvars` files in alphabetical order
4. `-var` and `-var-file` flags (highest priority as evaluated last)

## Variable types

- string
- number
- bool - `true` or `false` lowercase
- any
- list
- map
- object
- tuple
- set: uniqueness / order don't matter - no dupes of course

## Example variables

```hcl
variable "instance_type" {
  description = "The type of instance to create."
  type        = string
  default     = "t2.micro"
}

variable "availability_zones" {
  description = "A list of availability zones in the region."
  type        = list(string)
  default     = ["us-west-2a", "us-west-2b"]
}

variable "network_config" {
  description = "A fixed-length list containing network settings."
  type        = tuple([string, bool])
  default     = ["subnet-12345678", true]
}

variable "tags" {
  description = "A map of tags to assign to the resources."
  type        = map(string)
  default     = {
    Name        = "MyInstance"
    Environment = "Dev"
  }
}

variable "allowed_ip_addresses" {
  description = "A set of IP addresses allowed to access the resource."
  type        = set(string)
  default     = ["192.168.1.10", "192.168.1.20", "192.168.1.10"] # Duplicate will be filtered out
}
```

## Use variable object

tfvars file

```env
feature_flags = {
  flag1: "true"
  flag2: "false"
}
```

variable declaration in `variables.tf`

```hcl
variable "feature_flags" {
  description = "my custom description"
  type = object({
    flag1 = string
    flag2 = string
  })
}
```

Access Variable Object Properties

```hcl
setting = var.feature_flags.flag1
```

## Use a map variable

`var.instance_tags["Name"]`

## Setting variable values

### Environment variables
prefix with `TF_VAR_`

```bash
export TF_VAR_db_connection_string='your_db_connection_string'
terraform apply
```

### Directly to terraform cli
pass variables directly:
`terraform apply -var my_variable=my_value1 -var another_variable=another_value2`

### Pass file to terraform cli
pass variable file:
`terraform apply -var-file=myfile.tfvars.json`

### Autoload from files
these file formats will will automatically be loaded on `terraform` cli runs:
- `terraform.tfvars`
- `terraform.tfvars.json`
- `myfile.auto.tfvars`
- `myfile.auto.tfvars.json`

## Common issues

### Sensitive values

No way to avoid printing sensitive outputs in logs. Make sure to encrypt the
s3 backend
