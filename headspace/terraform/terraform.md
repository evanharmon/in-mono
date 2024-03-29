# TERRAFORM

## Resources

- [Terraform Getting Started](https://www.terraform.io/intro/getting-started/install.html)
- [Terraform Automation](https://learn.hashicorp.com/terraform/development/running-terraform-in-automation)
- [Terraform Version Manager](https://warrensbox.github.io/terraform-switcher/)
- [Terraform AWS Provider](https://www.terraform.io/docs/providers/aws/index.html)

## Installation

Steps:

- [Terraform Download](https://www.terraform.io/downloads.html) terraform in to the
  `$HOME/Downloads` folder

- Make a directory, unzip / copy the binary

```console
mkdir $HOME/bin
unzip $HOME/Downloads/terraform_0.11.8_darwin_amd64.zip -d $HOME/bin
```

- Add the below line to your `.bashrc, .bash_profile, .zshrc` file

```shell
export PATH=$HOME/bin:$PATH
```

## Install Terraform Version Manager

```
brew install warrensbox/tap/tfswitch
```

## Tutorials / Learning

- [Terraform Best Course - Learn DevOps: Infrastructure Automation With Terraform](https://www.udemy.com/learn-devops-infrastructure-automation-with-terraform/learn/v4/content)

## Examples

- [Gruntwork Introduction to Terraform](https://blog.gruntwork.io/an-introduction-to-terraform-f17df9c6d180)
- [Terraform AWS Modules](https://github.com/terraform-aws-modules)

## Functions

### cidrsubnet

- [Terraform CIDR Subnet Article](http://blog.itsjustcode.net/blog/2017/11/18/terraform-cidrsubnet-deconstructed/)

### Route Table Associations

- [Terraform Count](https://stackoverflow.com/questions/51739482/terraform-how-to-associate-multiple-subnet-to-route-table)

### Tags For Autoscaling Groups

- [Github Issue Solution](https://github.com/hashicorp/terraform/issues/15226)

```
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

## Review Stale Plan

```console
terraform show tfplan
```

## Clear Cache

```console
find . -type d -name ".terraform" -prune -exec rm -rf {} \;
```
