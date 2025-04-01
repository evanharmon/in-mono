# TERRAFORM MODULE TERRAFORM AWS EKS

## Resources
- [terraform-aws-eks module examples](https://github.com/terraform-aws-modules/terraform-aws-eks/tree/master/examples)

## Features
manages a LOT of the eks and related AWS resources

## Defaults

- AWS manages add-ons

## Best practices

- I wonder if it's really smart to let AWS manage these add ons?
- manage CloudWatch group separately - this module DELETES the logs and log group on teardown

## VPC-CNI add-on
order of how this is updated matters a lot! Still learning...
TODO: it would be nice to add the config for network policy controller

```conf
cluster_addons = {
  vpc-cni = {
    # https://aws-ia.github.io/terraform-aws-eks-blueprints/snippets/ipv4-prefix-delegation/
    before_compute = true # must be updated BEFORE any ec2 instances are created
    most_recent = true # ensure access to latest settings provided
    configuration_values = jsonencode({
      enableNetworkPolicy = "true"
      env = {
        ENABLE_PREFIX_DELEGATION = "true"  # Recommended for IPv4 efficiency
        WARM_PREFIX_TARGET = "1"
      }
    })
  }
}
```

## CoreDNS add-on
apparently before_compute is NOT a good idea for this DS. It could cause a race condition?

## Cloudwatch log groups
tear down autodeletes CW log groups and all old logs!!
