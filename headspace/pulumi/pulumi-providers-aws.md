# PULUMI PROVIDER AWS

## Resources
- [Pulumi AWS Cloud Control Provider GA](https://www.pulumi.com/blog/pulumi-aws-cloudcontrol-provider/)
- [Pulumi standard aws provider](https://www.pulumi.com/registry/packages/aws/)
- [Pulumi aws cloud control provider](https://www.pulumi.com/registry/packages/aws-native/)

## Features
for use with aws resources
- two variants `aws` and `aws-native`
- cloud control provider used to be known as `aws-native`
- `cf2pulumi` cli available to migrate cloudformation to pulumi
- both providers can be used together

## Best practices
- use `aws cloud control` for immediate access to new features / CloudControl API
- use `aws` for existing projects / broad coverage where `aws-native` doesn't have resources

## Default tags setup from config file
set the tags in pulumi config file
Note it won't affect EXISTING resources
```yaml
# pulumi.dev.yaml
config:
  aws:profile: myprofile
  aws:region: us-east-1
  aws:defaultTags:
    tags:
      Environment: dev
      Project: myproject
      StackName: evan
      Owner: Evan Harmon
      CostCenter: Cloud
```

## Use separate providers file
```python
""" providers.py """
import pulumi
import pulumi_aws as aws

config = pulumi.Config()
tags = config.require_object("tags")

aws_provider = aws.Provider("aws-provider")
```

```python
""" vpc.py """
from .providers import aws_provider

# Use with any resource
vpc = aws.ec2.Vpc("my-vpc",
    cidr_block="10.0.0.0/16",
    provider=aws_provider
)
```

## Get available AZs filtered
```python
# This call is evaluated immediately — it's a synchronous data source function
azs = aws.get_availability_zones(
    filters=[{"name": "opt-in-status", "values": ["opt-in-not-required"]}]
)

# Just slice the list directly
selected_azs = azs.names[:NUM_AZS]

# Use the selected AZs wherever needed
for i, az in enumerate(selected_azs):
    pulumi.export(f"az_{i}", az)

pulumi.export("availability_zones", selected_azs)
```

## DefaultTags with explicit provider in golang
```go
aws_cfg := config.New(ctx, "aws")
region := aws_cfg.Require("region")
defaultProfile := aws_cfg.Require("profile")
var tagsObject struct {
  Tags map[string]string `json:"tags"`
}
aws_cfg.RequireObject("defaultTags", &tagsObject)
defaultTags := tagsObject.Tags

awsMgmtAcctUsEast1, err := aws.NewProvider(
  ctx,
  "aws-provider-mgmt-us-east-1",
  &aws.ProviderArgs{
    Region: pulumi.String(region),
    Profile: pulumi.String(defaultProfile),
    DefaultTags: aws.ProviderDefaultTagsArgs{
      Tags: pulumi.ToStringMap(defaultTags),
    },
  },
)
if err != nil {
    return err
}
```
