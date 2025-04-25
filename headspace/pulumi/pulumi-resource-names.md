# PULUMI RESOURCE NAMES

## Resources

- [Pulumi resource names](https://www.pulumi.com/docs/iac/concepts/resources/names/#:~:text=As%20a%20default%20prefix%20for,change%20to%20the%20new%20name.)

## Features
- each resource as a `logical name`: known inside pulumi
- each resource as a `physical name`: used by cloud provider

### Guidance
The below guidance just never has really worked for me in Pulumi.
I've always had to create classes and:
- use a class name prop as a baseline
- use dynamic strings to avoid duplicate URNs in the future
- deal with AWS resources that don't get auto-prefixed anyways
- use prefixes where possible on AWS resources

1.	Reusing Simple or Generic Names like "default" for multiple resources (DefaultSecurityGroup, DefaultRouteTable, DefaultNetworkAcl), without stack/unique prefixing, can cause name collisions and alias mismatches.
2.	Using dynamic strings for resource_name like f"{name}-public-{zone_id}" creates names that can change between deploys, especially if the name or zone_id inputs change. This can force Pulumi to destroy and recreate resources unnecessarily.
3.	Pulumi suggests always using a stable name as a default prefix for the auto-name and explicitly setting name in tags if you want to surface readable names in the AWS console.


## Logical name
- used as default prefix for resource physical name for cloud provider
- used to construct URN
- used by pulumi to decide whether to create or update existing

```python
role = iam.Role("my-role")
```

## Examples

### Consistent / fixed pulumi URN and AWS Name
```python
self.cluster_sg = aws.ec2.SecurityGroup(
    resource_name=f"{name}-sg",  # Pulumi name
    name=f"{name}-sg",           # AWS name
    description="Cluster security group",
    vpc_id=vpc_id,
    tags={"Name": name},
    opts=pulumi.ResourceOptions(parent=self),
)
```

### Fixed Pulumi URN and auto-generated name

```python
self.cluster_sg = aws.ec2.SecurityGroup(
    resource_name=f"{name}-sg",
    name_prefix=f"{name}-sg-",
    description="Cluster security group",
    vpc_id=vpc_id,
    tags={"Name": name},
    opts=pulumi.ResourceOptions(parent=self),
)
```