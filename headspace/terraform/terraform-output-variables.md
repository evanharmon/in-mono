# TERRAFORM OUTPUT VARIABLES

## Resources
- [Terraform output values](https://developer.hashicorp.com/terraform/language/values/outputs)

## Output a value
```conf
output "instance_ip_addr" {
  value       = aws_instance.server.private_ip
  description = "The private IP address of the main server instance."
}
```

## Ephemeral output
not stored in state
```conf
# modules/db/main.tf
output "secret_id" {
  value       = aws_secretsmanager_secret.secret_id
  description = "Temporary secret ID for accessing database in AWS."
  ephemeral   = true
}

```

## Sensitive output
not shown in logs but still visible in state
```conf
output "db_password" {
  value       = aws_db_instance.db.password
  description = "The password for logging in to the database."
  sensitive   = true
}
```

## Explicit dependency on output
```conf
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

## Export module outputs
```conf
# outputs.tf
# Re-export all outputs from the vpc module
output "vpc" {
  description = "re-export vpc outputs"
  value       = module.vpc.vpc_id
}
# re-export single vpc_id
output "vpc_id" {
  description = "The ID of the VPC"
  value       = module.vpc.vpc_id
}
```