# PULUMI AWS GOTCHAS

## Security Groups
- `delete_before_replace=True` doesn't work! Use alias instead

## Pulumi.*.yaml config value
- cannot be reference via `pulumi.Config()` as provider won't be initialized yet
