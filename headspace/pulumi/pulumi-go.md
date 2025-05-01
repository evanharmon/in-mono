# PULUMI GO

## Commands

### Compile
binary must match name in `Pulumi.yaml`

```sh
go build -o $(basename $(pwd))
```

### Pulumi
then just run your pulumi commands

```sh
pulumi preview
pulumi up
pulumi destroy
```

## ApplyT

### Parse out array ID
```go
parentID := org.Roots.ApplyT(func(roots []organizations.OrganizationRoot) string {
  if len(roots) > 0 {
    return *roots[0].Id
  }
  return ""
}).(pulumi.StringOutput)
```

### Convert IDOutput to StringOutput

```go
stringOutput := idOutput.ApplyT(func(id pulumi.ID) string {
    return string(id)
}).(pulumi.StringOutput)
```
