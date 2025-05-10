# TERRAFORM CLI

## Resources
- [Terraform Download](https://www.terraform.io/downloads.html)
- [Terraform CLI](https://developer.hashicorp.com/terraform/cli/commands)
- [Terraform GH Releases](https://github.com/hashicorp/terraform/releases)

## Getting started

```bash
# create a terraform file with provider / resources
vi main.tf
cat > main.tf <<-EOF
resource "local_file" "config_data" {
  filename = "test.txt"
  content = "this is some config"
}
EOF
# Init project
terraform init
# Run plan
terraform plan -out tfplan
# Run apply
terraform apply tfplan
# Run destroy
terraform destroy
```

## Other commands

### Generate visualizations of resources
`terraform graph`

### Validate syntax on terraform resource files
just a general linting / syntax check. Apply could still error as it's not checking values.

`terraform validate`

### Format terraform files
`terraform fmt`

### Show provider config
easier than looking in `.terraform` directory
`terraform providers`

## Common issues

### Clear Cache

`find . -type d -name ".terraform" -prune -exec rm -rf {} \;`