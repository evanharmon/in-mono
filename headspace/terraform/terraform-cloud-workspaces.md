# TERRAFORM CLOUD WORKSPACES

## Resources
- [HCP Terraform Cloud workspaces](https://developer.hashicorp.com/terraform/cloud-docs/workspaces)

## Features
Remote state for a group of resources.
- very different than terraform OSS workspaces!!
- contains state / variables / credentials / secrets
- provides separation - separate state file / stack
- runs / logs

## Best practices
- can have separate workspaces for dev / staging / prod
- names should use dashes

## Limitations
- name must be unique across organization

## Components
- configurations
- state file
- variables
- tf version
- run history
- permissions
- notifications
- policy enforcement
- cost estimation

## Common naming strategies
good to use standard naming conventions
`<app>-<tier>-<region>-<environment>`
`<team>-<environment>-<app>-<tier>-<region>-<number>`

other examples:
`devops-aws-myapp-dev`