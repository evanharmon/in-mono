# AWS EKS ADDONS

## Features
EKS manages the addons. This isn't a kubernetes thing - it's an AWS thing
- AWS manages the installation of the addon
- VPC CNI is automatically added to a new EKS cluster
- AWS makes sure addon is appropriate version for cluster

## Best practices
- use managed add-ons when you NEED AWS to manage lifecycle, updates, and security patches (VPC CNI for example?) I dunno - EKS guy says don't use them at all...
- DON'T use addons for things like coredns, kubeproxy, etc (per the EKS guy)
- DON'T use customer addons either - manage them yourself

## Limitations
you don't get full control on how the addon is managed and upgraded.
Addons marketplace / addons in general have to WAIT to get approved version in to addons!!
- don't have control on EXACTLY when it rolls out - do the update and then wait for kube API servers to push it out
- makes full EKS cluster upgrades harder bc managed addons may not be ready with a version!!!

## Default installs
EKS clusters auto install CoreDNS / Kubeproxy.
Won't show up as addons unless you add them or put in IaC resources for `eks.addon`

## Check addon configuration values
Easier to look it up and `edit` in the AWS Console - shows full schema

```bash
aws eks describe-addon-configuration \
  --addon-name coredns \
  --addon-version v1.10.1-eksbuild.1
```
