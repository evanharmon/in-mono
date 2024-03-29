# TERRAFORM CLI

## Resources

- [Terraform State Move Blog](https://ryaneschinger.com/blog/terraform-state-move/)
- [Terraform Plan Docs](https://www.terraform.io/docs/commands/plan.html)

## State

#### Remove Root Level Resource

```console
terraform state rm aws_iam_service_linked_role.autoscaling
```

#### Remove Entire Module

```console
terraform state rm module.mymod
```

#### Remove Module Resource

```console
terraform state rm "module.mymodule.aws_cloudfront_distribution.mycdn[0]"
```

#### Taint Module

```console
terraform taint --module=my-module aws_iam_role.my_role
```

#### Move To Another State File

Note: Be careful not to have a resource controlled by two state files!
Terraform does not support moving modules or resources between two s3 tfstate
files. Copy the state file to the new location in s3 and remove any modules
or resources not in use.

## Resources

#### Destroy Entire Module

```console
terraform destroy --target=module.mymod
```

#### Move `main.tf` Resources To Modules

Remove resource from main.tf file, add to `modules/mymodule/main.tf` file, then:

```console
terraform state mv aws_elb.weblb module.web.aws_elb.weblb
```

## Show Details Of Resource

```console
terraform state show module.storage.aws_iam_role_policy.auth
```

## Pass Variables To Plan

```console
terraform plan -out=tfplan -var env=sandbox
```

## Limit Plan To Modules

```console
terraform plan -out=tfplan --target=module.appsync
```

## Outputs Not Updating

`terraform plan` will show no changes. Instead run `terraform refresh`

## Import

#### Import User Pool

```console
terraform import aws_cognito_user_group.my_group us-east-1_vG78M4goG/user-group
```

#### Import IAM Policy

```console
terraform import aws_iam_policy.my_policy arn:aws:iam::123456789012:policy/UsersManageOwnCredentials
```

#### Import IAM Role

```console
terraform import aws_iam_role.my_role role_name
```

#### Import Attached Role Policy

```console
terraform import aws_iam_role_policy_attachment.my_role role_name
```

#### Cannot Import Non-Existent Remote Object

Sometimes the provider needs to be added explicitly in the CLI call

```console
terraform import -provider=aws.my-custom aws_iam_policy.my_policy arn:aws:iam::aaaaaaaaaaaa:policy/my-policy
```

## Force Serial Deployment

helps avoid lambda permission resource exception issues

```console
terraform apply --parallelism=1 tfplan
```

## Init

### Reconfigure State File

disregards any existing configuration of state

```console
terraform init -reconfigure
```
