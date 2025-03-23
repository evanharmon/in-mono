# TERRAFORM CLI IMPORTS

## Features
Resource can be edited afterwards - just be careful not to force re-creation
- resource must exist in TF files (can be empty)

## Example

```hcl
# create an empty resource block, then import
resource "aws_iam_role" "my_role" {}
```

## Commands

### Import IAM policy

`terraform import aws_iam_policy.my_policy arn:aws:iam::123456789012:policy/UsersManageOwnCredentials`

### Import IAM role

`terraform import aws_iam_role.my_role role_name`

### Import attached role policy

`terraform import aws_iam_role_policy_attachment.my_role role_name`

### Import to a module

```bash
# put in the HCL for the module,
# run a plan to see what the resource name / id should look like
terraform plan
# do the import
terraform import 'module.zones.aws_route53_zone.this["mydomain.dev"]' '/hostedzone/Z00000000000000000000'
# check the plan again and make changes as necessary
terraform plan
```

## Common issues

### Cannot import non-existent remote object

Sometimes the provider needs to be added explicitly in the CLI call

`terraform import -provider=aws.my-custom aws_iam_policy.my_policy arn:aws:iam::123456789012:policy/my-policy`
