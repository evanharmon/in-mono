# TERRAGRUNT CLI

## Features
- uses a `.terragrunt-cache` directory

## Init
```sh
# init
terragrunt init
# re-configure remote state
# IGNORES any saved configuration
terragrunt init --reconfigure
```

## Plan

### Debug Error Codes
`terragrunt plan-all --detailed-exitcode`

### Debug Vars
`terragrunt plan --terragrunt-debug`

## Destroy

### Destroy syntax
do NOT use the `terragrunt run-all plan -destroy` syntax. Terragrunt will not examine the
dependency ordering for destruction. Instead of uses dependency ordering based on creation.

### Force Destroy Ignoring Dependencies
`terragrunt run-all --terragrunt-ignore-dependency-errors destroy`

## Manage cache

### Clear Cache
`find . -maxdepth 3 -type d -name ".terragrunt-cache" -prune -exec rm -rf {} \;`

### Use custom directory
set the `TERRAGRUNT_DOWNLOAD` environment variable

## Gotchas

### null_resource local-exec
Terragrunt runs use the AWS credentials in place from the shell where the
terragrunt command was called from. An sts assume-role call should only have to
be made if a separate set of AWS credentials need to be in place.
