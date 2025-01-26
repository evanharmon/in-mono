# TERRAFORM AWS AUTOSCALING GROUPS

## Resources
- [Github Issue Solution for autoscaling group tags](https://github.com/hashicorp/terraform/issues/15226)

## Tags For Autoscaling Groups

```hcl
data "null_data_source" "asg-tags" {
  count = "${length(keys(var.tags))}"
  inputs = {
    key                 = "${element(keys(var.tags), count.index)}"
    value               = "${element(values(var.tags), count.index)}"
    propagate_at_launch = "true"
  }
}

resource "aws_autoscaling_group" "my-group" {
  ....
  tags = ["${data.null_data_source.asg-tags.*.outputs}"]
```