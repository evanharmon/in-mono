# AWS ORGANIZATIONS SERVICE CONTROLLED POLICIES (SCP)

## Resources

- [AWS Organizations SCP Docs](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)

## Features

- central control over the maximum available permissions for accounts in an org.
- applies to Root user of member accounts
- applied to users and roles in member accounts

## Limitations

- SCPs do not grant actual permissions
- does not affect users or roles in management account
- only affect member accounts
- does not affect resource based policies directly
- does not affect any service-linked role

## Requirements

- all features enabled
- policies must have an explicit Allow

## Deny Lists

- use DENY lists for less maintenance when new services added
- DENY lists use less space so easier to stay under maximum size for an SCP
- combines with default FullAWSAccess auto generated SCP

## Allow Lists

- have to remove default FullAWSAccess auto generated SCP

## Testing Recommendations

- create new OU
- move accounts in one at a time or in a small number to ensure users aren't locked out of services

## Permission Boundaries

- do not override SCPs but boundary must also allow action
