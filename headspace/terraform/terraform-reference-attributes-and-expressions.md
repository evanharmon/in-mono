# TERRAFORM REFERENCE ATTRIBUTES AND EXPRESSIONS

## Resources
- [Terraform reference values](https://developer.hashicorp.com/terraform/language/expressions/references)
- [Terraform reference resource attributes](https://developer.hashicorp.com/terraform/language/expressions/references#references-to-resource-attributes)

## Features
use the values of resource attributes in other resources
- values can be marked sensitive to not show in logs

## Limitations
- sensitive values will still be stored and visible in state files

## Examples
`loadbalancer { targetGroupArn: "${aws_lb_target_group.mygroup.arn}" }`
```hcl
resource "aws_autoscaling_notification" "autoscaling_group" {
  group_names = ["${aws_autoscaling_group.autoscaling_group.name}"]

  notifications = [
    "autoscaling:EC2_INSTANCE_LAUNCH",
    "autoscaling:EC2_INSTANCE_LAUNCH_ERROR",
    "autoscaling:EC2_INSTANCE_TERMINATE",
    "autoscaling:EC2_INSTANCE_TERMINATE_ERROR",
  ]

  topic_arn   = "${aws_sns_topic.autoscaling_group.arn}"
}
```
