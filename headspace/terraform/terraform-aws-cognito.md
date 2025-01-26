# TERRAFORM AWS IAM

## Resources
- [SO Terraform Managed Policy](https://stackoverflow.com/questions/45002292/terraform-correct-way-to-attach-aws-managed-policies-to-a-role)
- [Terraform GH aws_iam_role Issue](https://github.com/hashicorp/terraform/issues/11873)

### Attach Managed Policy To Role

```hcl
data "aws_iam_policy" "ReadOnlyAccess" {
  arn = "arn:aws:iam::aws:policy/ReadOnlyAccess"
}
resource "aws_iam_role_policy_attachment" "sto-readonly-role-policy-attach" {
  role       = "${aws_iam_role.sto-test-role.name}"
  policy_arn = "${data.aws_iam_policy.ReadOnlyAccess.arn}"
}
```

### Potential Cause aws_iam_role Continually Updated

Multiple role policy attachments can clobber?

### Lambda Invokation From Cognito Policy

in terraform:

```hcl
resource "aws_lambda_permission" "allow_invocation_from_cognito" {
  provider      = aws.cross-account
  statement_id  = "AllowExecutionFromCognito"
  action        = "lambda:InvokeFunction"
  function_name = module.post_confirmation_trigger.lambda_name
  principal     = "cognito-idp.amazonaws.com"
  source_arn    = module.cognito_user_pool.user_pool.arn
}
```
