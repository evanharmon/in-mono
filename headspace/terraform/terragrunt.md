# TERRAGRUNT

## Resources

- [Terragrunt Docs](https://terragrunt.gruntwork.io/docs)
- [Terragrunt Working With Multiple AWS Accounts](https://terragrunt.gruntwork.io/docs/features/work-with-multiple-aws-accounts/)

## Clear Cache

- [Terragrunt Caching](https://terragrunt.gruntwork.io/docs/features/caching/)

`find . -maxdepth 3 -type d -name ".terragrunt-cache" -prune -exec rm -rf {} \;`

## Debug Error Codes

`terragrunt plan-all --detailed-exitcode`

## Debug Vars

`terragrunt plan --terragrunt-debug`

## Destroy

do NOT use the `terragrunt run-all plan -destroy` syntax. Terragrunt will not examine the
dependency ordering for destruction. Instead of uses dependency ordering based on creation.

## Force Destroy Ignoring Dependencies

`terragrunt run-all --terragrunt-ignore-dependency-errors destroy`

## null_resource local-exec

Terragrunt runs use the AWS credentials in place from the shell where the
terragrunt command was called from. An sts assume-role call should only have to
be made if a separate set of AWS credentials need to be in place.
