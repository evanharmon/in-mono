# TERRAFORM PROVIDERS

## Resources
- [Terraform provider registry](https://registry.terraform.io/browse/providers)

## Features
- uses a plugin based architecture known as `providers`
- latest version of provider installed by default

## Limitations
- whenever a new provider is added, `terraform init` is required

## Provider types

### Official
examples:
- AWS
- GCP
- AZURE
- local (hashicorp)
- kubernetes

### Partner
third-party providers examples:
- heroku
- digital ocean
- buildkite
- fivetran

### Community
managed by individuals

## Provider source address format
- hostname is optional, this is the default - similar to `docker.io`

format: <hostname>/<org_namespace>/<type> 
examples:
`hashicorp/local: version = "~> 2.0.0"`
`registry.terraform.io/hashicorp/local: version = "~> 2.0.0"`

## Provider registry file locations
```bash
ls -la ./terraform/providers/
# example: local provider
ls -la ./terraform/providers/registry.terraform.io/hashicorp/local
```
