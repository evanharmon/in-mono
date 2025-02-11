# TERRAFORM COUNT

## Resources

- [Terraform count docs](https://developer.hashicorp.com/terraform/language/meta-arguments/count)

## Features
Create one or more resource

## Limitations
- `count` and `for_each` cannot be used in the same resource / module block
- `count` value must be known BEFORE terraform performs any remote resource actions

## Best practices
- use on resources where arguments are almost identical - just multiple needed
- use where distinct values are integers - otherwise prefer `for_each`

## Examples

### Basic use
```hcl
resource "aws_instance" "server" {
  count = 4 # create four similar EC2 instances

  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"

  tags = {
    Name = "Server ${count.index}"
  }
}
```

## Antipattern
```hcl
variable "subnet_ids" {
  type = list(string)
}

# don't do this - use a for_each instead
resource "aws_instance" "server" {
  # Create one instance for each subnet
  count = length(var.subnet_ids)

  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"
  subnet_id     = var.subnet_ids[count.index]

  tags = {
    Name = "Server ${count.index}"
  }
}
```