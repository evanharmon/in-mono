# TERRAGRUNT

## Resources
- [Terragrunt Docs](https://terragrunt.gruntwork.io/docs)
- [Terragrunt with TF cloud / enterprise](https://docs.gruntwork.io/2.0/docs/library/guides/integrate-tfc/#using-tfc-with-terragrunt)
- [Terragrunt Working With Multiple AWS Accounts](https://terragrunt.gruntwork.io/docs/features/work-with-multiple-aws-accounts/)
- [Terragrunt env0 examples](https://www.env0.com/blog/terragrunt#:~:text=Instead%20of%20manually%20running%20terraform,multiple%20Terraform%20modules%20at%20once.)
- [Terragrunt Caching](https://terragrunt.gruntwork.io/docs/features/caching/)

## Features
Terragrunt is a thin wrapper for Terraform that provides extra tools for keeping your configurations DRY, working with multiple Terraform modules, and managing remote state.
- keeps terraform code DRY
- manages folder hierarchy / multiple state files and management
- allows parallel execution of terraform commands across multiple modules
- simplifies working with multiple cloud accounts / regions
- built-in debugging and logging capabilities
- manages dependencies between modules automatically
- supports any terraform backend, including terraform cloud

## Benefits
- modular configuration
- variable abstraction: centralized variable management
- hierarchical configuration: reduces dupe configs / allows inheritance of settings
- simplified maintenance

## Install

### macOS
`brew install terragrunt`

### Linux

```sh
wget https://github.com/gruntwork-io/terragrunt/releases/download/v0.58.8/terragrunt_linux_amd64
sudo install terragrunt_linux_amd64 /usr/local/bin/terragrunt
rm terragrunt_linux_amd64
```
