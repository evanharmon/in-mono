# TERRAFORM CLI IMPORTS

## Commands

### Import User Pool

`terraform import aws_cognito_user_group.my_group us-east-1_vG78M4goG/user-group`

### Import IAM Policy

`terraform import aws_iam_policy.my_policy arn:aws:iam::123456789012:policy/UsersManageOwnCredentials`

### Import IAM Role

`terraform import aws_iam_role.my_role role_name`

### Import Attached Role Policy

`terraform import aws_iam_role_policy_attachment.my_role role_name`

### Cannot Import Non-Existent Remote Object

Sometimes the provider needs to be added explicitly in the CLI call

`terraform import -provider=aws.my-custom aws_iam_policy.my_policy arn:aws:iam::aaaaaaaaaaaa:policy/my-policy`
