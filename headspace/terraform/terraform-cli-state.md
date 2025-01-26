# TERRAFORM CLI STATE

## Resources
- [Terraform State Move Blog](https://ryaneschinger.com/blog/terraform-state-move/)

## Commands

## Show current state of all resources

`terraform show`

## Show Details Of Resource

`terraform state show module.storage.aws_iam_role_policy.auth`

## Remove Root Level Resource

`terraform state rm aws_iam_service_linked_role.autoscaling`

## Remove Entire Module

`terraform state rm module.mymod`

## Remove Module Resource

`terraform state rm "module.mymodule.aws_cloudfront_distribution.mycdn[0]"`

## Taint Module

`terraform taint --module=my-module aws_iam_role.my_role`

## Move To Another State File

Note: Be careful not to have a resource controlled by two state files!
Terraform does not support moving modules or resources between two s3 tfstate
files. Copy the state file to the new location in s3 and remove any modules
or resources not in use.

## Move `main.tf` Resources To Modules

Remove resource from main.tf file, add to `modules/mymodule/main.tf` file, then:

`terraform state mv aws_elb.weblb module.web.aws_elb.weblb`
