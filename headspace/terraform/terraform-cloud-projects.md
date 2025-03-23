# TERRAFORM CLOUD PROJECTS

## Resources
- [HCP tf cloud projects](https://developer.hashicorp.com/terraform/tutorials/cloud/projects)

## Features
organize workspaces in to groups
- can be by business unit, teams, services, etc
- variables can be scoped at the project level covering multiple workspaces
- policy sets supported at project level

## Default project
auto-generated and cannot be deleted. It can be renamed
new workspaces are put in this project by default

## Permissions
avoids the need to go in to each workspace and add teams for permissions
instead you can group the workspaces by project. Then assign the team /
permissions on the project.
