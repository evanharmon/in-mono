# TERRAFORM CLOUD STACKS

## Resources
- [HCP tf stacks docs](https://developer.hashicorp.com/terraform/cloud-docs/stacks)
- [HCP tf stack use cases](https://developer.hashicorp.com/terraform/language/stacks/use-cases)
- [HCP tf design a stack](https://developer.hashicorp.com/terraform/language/stacks/design)

## Features
useful when managing complex, multi-environment infrastructures where consistency and reusability are crucial
In public beta as of this writing.
- alternative to but can exist alongside workspaces
- not built on top of workspaces
- uses own stack config file
- uses deployment config 

## Deployment
allows you to replicate the stack across multiple environments, regions, accounts, etc.