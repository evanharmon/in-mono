# LOCALSTACK TFLOCAL

## Resources

## Features
wrapper around terraform cli
- auto-generates s3 backend bucket if necessary

## Commands

### Install
`pip install terraform-local`

### Generate overwrite file and display
does not run terraform command
```bash
# would work for `init` as well
DRY_RUN=true tflocal plan
cat localstack_providers_override.tf
# remember to remove this file before running any more `tflocal` commands
rm localstack_providers_override.tf
```