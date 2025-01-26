# TERRAFORM PROVIDER LOCAL

## File
file contents can be printed out to screen

```hcl
resource "local_file" "config_data" {
  filename = "config.txt"
  content = "this is a config file"
}
```

## Sensitive file
file contents will NOT be printed out to screen

```hcl
resource "local_sensitive_file" "sensitive_data" {
  filename = "sensitive.txt"
  content = "this is a password"
}
```