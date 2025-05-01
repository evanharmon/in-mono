# PULUMI RESOURCE IMPORTS

## Limitations
- sometimes have to use ignore changes on tags, etc for imports to work

## Examples

### Golang import
ComponentResource with some ignores as well
- ignore changes on tags, etc to get the resource to match
- then remove the import and ignore changes

```go
childOpts := append(opts, pulumi.Parent(component), pulumi.Protect(true))
_, err = organizations.NewOrganizationalUnit(ctx, name+"-infrastructure", &organizations.OrganizationalUnitArgs{
  Name:     pulumi.String("Infrastructure"),
  ParentId: component.OrganizationRootOrgUnitID,
}, append(childOpts, pulumi.Import(pulumi.ID("ou-zzzz-yyyyyyyy")), pulumi.IgnoreChanges([]string{"tags", "tagsAll"}))...)
```
