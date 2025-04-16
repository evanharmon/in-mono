# AWS EKS BOTTLEROCKET

## Resources
- [EKS Bottlerocket enable SSM agent](https://github.com/bottlerocket-os/bottlerocket/blob/develop/QUICKSTART-EKS.md#enabling-ssm)
- [EKS Bottlerocket launch local VM](https://github.com/bottlerocket-os/bottlerocket/blob/develop/QUICKSTART-LOCAL.md)
- [EKS Bottlerocket quickstart](https://github.com/bottlerocket-os/bottlerocket/blob/develop/QUICKSTART-EKS.md)

## Features
secure and improved image for running containerized workloads
- works on EKS and ECS
- VMware option as well
- offers `apiclient` utility

## Instance types
minimum use `t3.medium` (2 vCPUS, 4GB RAM)
common is `m6i.large`

even more are available

## Customize
you can pass additional configuration - like enabling sheltie
```
# This is not required - demonstrates how to pass additional configuration
# Ref https://bottlerocket.dev/en/os/1.19.x/api/settings/
bootstrap_extra_args = <<-EOT
  # The admin host container provides SSH access and runs with "superpowers".
  # It is disabled by default, but can be disabled explicitly.
  [settings.host-containers.admin]
  # SECURITY ALERT: I ENABLED SHELTIE (: LOL
  enabled = true

  # The control host container provides out-of-band access via SSM.
  # It is enabled by default, and can be disabled if you do not expect to use SSM.
  # This could leave you with no way to access the API and change settings on an existing node!
  [settings.host-containers.control]
  enabled = true

  # extra args added
  [settings.kernel]
  lockdown = "integrity"
EOT
```
