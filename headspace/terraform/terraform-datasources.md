# TERRAFORM DATASOURCES

## Resources

- [Terraform datasources docs](https://developer.hashicorp.com/terraform/language/data-sources)

## Features
Use information defined outside terraform from providers
- only used for READING infrastructure values

## Best practices
- prefer to use property references on defined resources for dependency management

## Example

### AWS EKS Bottlerocket AMI

```hcl
variable "eks_version" {
  type    = string
  default = "1.27"
}

data "aws_ssm_parameter" "bottlerocket_image_id" {
  name = "/aws/service/bottlerocket/aws-k8s-${var.eks_version}/x86_64/latest/image_id"
}

data "aws_ami" "bottlerocket_image" {
  owners = ["amazon"]
  filter {
    name   = "image-id"
    values = [data.aws_ssm_parameter.bottlerocket_image_id.value]
  }
}
```