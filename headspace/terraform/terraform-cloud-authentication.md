# TERRAFORM CLOUD AUTHENTICATION

## Types
- MFA
- SSH keys
- controlled session duration

## Tokens
- user
- team
- organization

### User
can be granted access to multiple orgs

### Team
for use by services / CI CD pipeline, etc.

can be used to:
- perform plans
- perform applies

### Organization

can be used to:
- manage teams / teams membership
- manage workspaces
- set timeout / total allowed session duration
- enforce MFA for all users

cannot perform plans or applies