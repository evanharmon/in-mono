# PULUMI ARCHIVES

## Resources

- [Pulumi archives](https://www.pulumi.com/docs/intro/concepts/assets-archives/#archives)

## Features

- supports file, asset, or remote types
- folder can be passed

## Python example

```python
file_archive = pulumi.FileArchive("./file.zip")
remote_archive = pulumi.RemoteArchive("http://contoso.com/file.zip")
asset_archive = pulumi.AssetArchive({
    "file": pulumi.StringAsset("Hello, world!"),
    "folder": pulumi.FileArchive("./folder")
})
```

## Example use

```python
fn = lambda_.Function("fn",
    role=role.arn,
    runtime="python3.7",
    handler="hello.handler",
    code=file_archive)
```
