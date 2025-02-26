# TERRAFORM FOR_EACH

## Resources
- [Terraform for_each docs](https://developer.hashicorp.com/terraform/language/meta-arguments/for_each)

## Features
Create one or more instances of a resource
- alternative to `count`

## Limitations
- accepts a `map` or a `set` of strings
- keys of a map MUST be known values
- all values of a set of strings MUST be known values
- keys CANNOT be result / rely on impure functions like `uuid`, `timestamp`, `bcrypt`
- sensitive values CANNOT be used as argumnets to `for_each`

## Examples

### Map
```hcl
resource "azurerm_resource_group" "rg" {
  for_each = tomap({
    a_group       = "eastus"
    another_group = "westus2"
  })
  name     = each.key
  location = each.value
}
```

### Set
shows the use of `each` as well

```hcl
resource "aws_iam_user" "the-accounts" {
  for_each = toset(["Todd", "James", "Alice", "Dottie"])
  name     = each.value
}
```

### Foreach substr
```hcl
resource "aws_s3_object" "upload_media" {
  bucket   = aws_s3_bucket.media.bucket
  for_each = var.media
  source   = each.value
  key      = substr(each.value, 7, 100)
}
```