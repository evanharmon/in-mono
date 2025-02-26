# TERRAFORM CREATION-TIME / DESTROY-TIME PROVISIONERS

## Resources
- [TF creation / destroy time provisioners](https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax#creation-time-provisioners)

## Features
unlike normal provisioners, runs after creation or before destroy of a resource

## Best practices
use them as a last resort
example: use `userdata` for aws instances - not local-exec..

## Limitations
local-exec / remote-exec:
- no provisioner info included in plan
- requires network connectivity / auth

## Setting creation or destroy mode
`when = destroy` or `when = create`

## Taint resource on failure
`on_failure = fail`

## Continue on failure
resource will not be tainted
`on_failure = continue`

## Limitations
- must be idempotent / safe to re-run

## Examples

### creation-time ec2 instance
obv using SSM doc would be better - but an example.

```hcl
# Create an EC2 instance in subnet A
resource "aws_instance" "example" {
  ami           = "ami-abcd1234"
  instance_type = var.instance_type
  vpc_security_group_ids = [aws_security_group.example.id]
  subnet_id = aws_subnet.a.id

  provisioner "local-exec" {
    command = "sleep 30; sudo yum install -y httpd && echo 'httpd installed successfully' > /tmp/installation_log.txt"
  }
}
```

### Empty an S3 bucket before destroy
obviously this could take FOREVER but it's an example

```hcl
resource "aws_s3_bucket" "example" {
  bucket = "my-bucket"

  provisioner "local-exec" {
    on_destroy = true

    command = "aws s3 rm s3://my-bucket/ --recursive"
  }
}
```