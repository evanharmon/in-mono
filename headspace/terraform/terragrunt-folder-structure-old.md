## TERRAGRUNT FOLDER STRUCTURE OLD

## Resources
- [OLD Terragrunt recommended folder structure](https://docs.gruntwork.io/2.0/docs/overview/concepts/infrastructure-live/)
- [Migration guide for terragrunt stacks folder structure](https://github.com/gruntwork-io/terragrunt-infrastructure-live-stacks-example/blob/main/docs/migration-guide.md)

## Features
old non-stacks based folder structure best practices. Now deprecated

## State file
Terragrunt recommends using remote state config a per-unit basis.
Ex: `dev/us-east-1/dev/networking/vpc/tofu.tfstate`
- middle `/dev/` can be left out if isolating environments to single accounts

## Typical folder structure
Below example assumes using separate AWS accounts per environment
- accounts have their own folder
- regions are nested inside the account folders
- `_global` region folder used for non-region scoped resources

`/modules` root folder can be separate git repo or stored in terraform private registry

```
infrastructure-live/
├── common.hcl          # Common configurations
├── accounts.json       # AWS account information
├── root.hcl            # Root Terragrunt configuration
├── dev/
│   ├── _global/      # Global settings for the dev account
│   │   └── region.hcl
│   ├── us-east-1/
│   │   └── region.hcl
│   │   └── vpc/
│   │       └── terragrunt.hcl
│   └── us-west-2/
│       └── region.hcl
│       └── vpc/
│           └── terragrunt.hcl
├── stage/
│   ├── _global/
│   │   └── region.hcl
│   ├── us-east-1/
│   │   └── region.hcl
│   │   └── vpc/
│   │       └── terragrunt.hcl
│   └── us-west-2/
│       └── region.hcl
│       └── vpc/
│           └── terragrunt.hcl
└── prod/
    ├── _global/
    │   └── region.hcl
    ├── us-east-1/
    │   └── region.hcl
    │   └── vpc/
    │       └── terragrunt.hcl
    └── us-west-2/
        └── region.hcl
        └── vpc/
            └── terragrunt.hcl
```
