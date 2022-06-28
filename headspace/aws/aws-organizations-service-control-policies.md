# AWS ORGANIZATIONS SERVICE CONTROLLED POLICIES
central control over the maximum available permissions for accounts in an org.
Think of them as guard rails

## Resources
- [SCP Docs](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)

## Use
- applied to users and roles in account
- Root user included

## Requirements
- all features enabled
- policies must have an explicit Allow

## Limitations
- SCPs do not grant actual permissions
- do not affect users or roles in management account
- only affect member accounts
- do not affect resource based policies directly
- do not affect any service-linked role

## Testing Recommendations
- create new OU
- move accounts in one at a time or in a small number to ensure users aren't locked out of services