# IAC TYPES

## Configuration management
- ansible
- puppet
- saltstack

used for:
- install & manage software
- maintain standard structure
- version control
- idempotency

## Server templating
- docker
- packer
- vagrant

used for:
- preinstalling software and dependencies
- virtual machine (AMIs, etc) / docker images
- immutable infrastructure - designed to be unchanged - don't update or change

## Provisioning tools
- terraform
- pulumi
- cloudformation (CDK)

used for:
- deploy immutable infrastructure resources
- servers, dbs, network components, etc
- multiple providers