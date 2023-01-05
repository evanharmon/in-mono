# PULUMI ASSETS

## Resources

- [Pulumi assets](https://www.pulumi.com/docs/intro/concepts/assets-archives/)

## Features

- supports file, string, or remote types

## Python example

```python
file_asset = pulumi.FileAsset("./file.txt")
string_asset = pulumi.StringAsset("Hello, world!")
remote_asset = pulumi.RemoteAsset("http://worldclockapi.com/api/json/est/now")
```

## Example use

```python
obj = aws.s3.BucketObject("obj",
    bucket=bucket.id,
    key=key,
    source=file_asset)
```
