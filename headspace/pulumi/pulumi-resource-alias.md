# PULUMI RESOURCE ALIAS

## Resources
-[Pulumi resource option: alias](https://www.pulumi.com/docs/iac/concepts/options/aliases/)

## Features
allows changing a resource name, type, or parent path
- stops pulumi replacing / re-creating resource
- alias list can contain multiple values
- after successful pulumi up, alias's can be removed or left in for historical

## Examples
pulumi up should NOT show create / delete if the Alias is correct.
It will only show no change or updates (if you updated a part of the resource as well - like tags)

### ComponentResource child python
`resource_name` is updated and tag as well from `sgr` to `sgx` as an example.
just changing the `resource_name` with the added Alias should yield no changes on pulumi up.
With the tags as well - it'll show as an update

```python
aws.vpc.SecurityGroupIngressRule(
    resource_name=f"{name}-node-sgx-53-udp-ingress-new",  # New name
    description="Node to node CoreDNS udp",
    from_port=53,
    ip_protocol="udp",
    referenced_security_group_id=self.node_sg.id,
    security_group_id=self.node_sg.id,
    to_port=53,
    tags={"Name": f"{name}-node-sgx-53-udp-ingress-new"},
    opts=pulumi.ResourceOptions(
        parent=self.node_sg,
        aliases=[
            # This creates an alias that includes the full resource path
            pulumi.Alias(
                type_="aws:vpc/securityGroupIngressRule:SecurityGroupIngressRule",
                name=f"{name}-node-sgr-53-udp-ingress",
                parent=self.node_sg
            )
        ]
    ),
)
```

### ComponentResource forgot to parent
```python
self.kms_key_alias = aws.kms.Alias(
    resource_name=f"alias/eks/{name}",
    target_key_id=self.kms_key.id,
    opts=pulumi.ResourceOptions(
        parent=self,
        aliases=[
            pulumi.Alias(name=f"alias/eks/{name}", parent=None),
        ],
    ),
)
```

### ComponentResource golang
takes root level resource and alias to ComponentResource
```go
org, err := organizations.NewOrganization(ctx, name, &organizations.OrganizationArgs{
    AwsServiceAccessPrincipals: pulumi.StringArray{
        pulumi.String("account.amazonaws.com"),
        pulumi.String("cloudtrail.amazonaws.com"),
        pulumi.String("config-multiaccountsetup.amazonaws.com"),
        pulumi.String("config.amazonaws.com"),
        pulumi.String("iam.amazonaws.com"),
        pulumi.String("sso.amazonaws.com"),
    },
    EnabledPolicyTypes: pulumi.StringArray{
        pulumi.String("SERVICE_CONTROL_POLICY"),
    },
    FeatureSet: pulumi.String("ALL"),
}, pulumi.Protect(true), pulumi.Parent(component), pulumi.Aliases([]pulumi.Alias{
	{URN: pulumi.URN("urn:pulumi:prod::myproject::aws:organizations/organization:Organization::org")},
}))
```
