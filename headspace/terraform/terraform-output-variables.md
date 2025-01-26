# TERRAFORM OUTPUT VARIABLES

## Resources
- [Terraform output values](https://developer.hashicorp.com/terraform/language/values/outputs)

## Output a value
```hcl
output "instance_ip_addr" {
  value       = aws_instance.server.private_ip
  description = "The private IP address of the main server instance."
}
```

## Ephemeral output
not stored in state
```hcl
# modules/db/main.tf

output "secret_id" {
  value       = aws_secretsmanager_secret.secret_id
  description = "Temporary secret ID for accessing database in AWS."
  ephemeral   = true
}

```

## Sensitive output
not shown in logs but still visible in state
```hcl
output "db_password" {
  value       = aws_db_instance.db.password
  description = "The password for logging in to the database."
  sensitive   = true
}
```

## Explicit dependency on output
```hcl
output "instance_ip_addr" {
  value       = aws_instance.server.private_ip
  description = "The private IP address of the main server instance."

  depends_on = [
    # Security group rule must be created before this IP address could
    # actually be used, otherwise the services will be unreachable.
    aws_security_group_rule.local_access,
  ]
}
```