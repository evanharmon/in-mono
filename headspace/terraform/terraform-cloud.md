# TERRAFORM CLOUD

## Features
HCP managed service for terraform for collaboration and governance
- handles state
- centralized module registry
- audit log
- permissions and RBAC
- runs happen on TF cloud instead of local / runners

## Common Errors

### Error: Unreadable module directory

Make sure `working directory` is specified in the terraform cloud workspace
settings