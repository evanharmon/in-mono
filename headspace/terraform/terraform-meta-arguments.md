# TERRAFORM META ARGUMENTS

## Resources
- [Terraform meta argument docs](https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on)

## Features
Key / Value pair arguments passed to terraform modules or providers to influence behavior
- modifies default behavior of terraform functionality
- override defaults

## Best practices
- use sparingly as can be harder to maintain / read in large config
- document why being used

## Types

- provider: customize a specific provider
- module: customize behavior of terraform modules

## Common arguments

### depends_on
```hcl
resource "aws_instance" "example" {
  // ... other properties ...
  depends_on = [aws_eip.example]
}
```

### count
```hcl
resource "aws_s3_bucket" "example" {
  count = 3
  // ... other properties ...
}
```

### for_each
```hcl
variable "regions" {
  type = list(string)
}

resource "aws_s3_bucket" "example" {
  for_each = var.regions
  // ... other properties ...
}
```

### provider
```hcl
provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "example" {
  bucket = "my-bucket"
}
```

### lifecycle
```hcl
resource "aws_s3_bucket" "example" {
  lifecycle {
    ignore_changes = [tags]
  }
}
```