# TERRAFORM TEMPLATE_FILE

## Review Rendering

`tf state show data.template_file.storage_policy`

## Conditional If Statement

```hcl
"aws:userId": [%{ if "${env}" == "prod" } "${id_one}" %{ else } "${id_two}, ${id_three}" %{ endif ~}]
```

## Generated Debug Template File

```hcl
resource "null_resource" "debug_policy" {
  provisioner "local-exec" {
    command = "echo \"${data.template_file.policy.rendered}\" > policy.generated.json"
  }
}
```

## Inspect Rendering

```bash
tf plan --var-file ../../.env.dev.tfvars -out=tfplan -target=module.service.null_resource.debug
tf apply tfplan
tf state show module.mymodule.template_file.policy
```

## Use Number In JSON

- [SO](https://stackoverflow.com/questions/50021600/terraform-interpolation-to-json-file-when-json-requires-value-to-be-integer)

The linter will complain but you can't use the surrounding quotes

```hcl
"memoryReservation": ${memory_reservation},
```

## Escape \$ Characters

```hcl
$${cognito-identity.amazonaws.com:sub}/*
```
