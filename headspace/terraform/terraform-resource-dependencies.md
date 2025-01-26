# TERRAFORM RESOURCE DEPENDENCIES

## Resources
- [Terraform resource dependencies](https://developer.hashicorp.com/terraform/tutorials/configuration-language/dependencies)

## Implicit dependency
`loadbalancer { targetGroupArn: "${aws_lb_target_group.mygroup.arn}" }`

## Explicit dependency
```hcl
resource "aws_s3_bucket" "example" { }

resource "aws_instance" "example_c" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t2.micro"

  depends_on = [aws_s3_bucket.example]
}

module "example_sqs_queue" {
  source  = "terraform-aws-modules/sqs/aws"
  version = "3.3.0"

  depends_on = [aws_s3_bucket.example, aws_instance.example_c]
}
```