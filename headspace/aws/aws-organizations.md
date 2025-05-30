# AWS ORGANIZATIONS

## Resources

- [AWS Blog Best Practices for Org Units in AWS Orgs](https://aws.amazon.com/blogs/mt/best-practices-for-organizational-units-with-aws-organizations/)
- [AWS Whitepaper Design Principles Basic Organization](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-organizing-your-aws-accounts.html)
- [Use IAM to Share AWS Resources Via aws:PrincipalOrgPaths](https://aws.amazon.com/blogs/security/iam-share-aws-resources-groups-aws-accounts-aws-organizations/)
- [AWS Blog - IAM Policy limited to AWS org unit accounts](https://aws.amazon.com/blogs/security/iam-share-aws-resources-groups-aws-accounts-aws-organizations/)
- [Turning on / off shared reserved instances & saving plans](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-on-process.html)

## Limitations

- existing accounts not created by the management account must enable all features to get SCP support

## Root User

- [AWS Organizations accessing a member account as root user](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html) to login as root user, password recovery must be completed

## Create org
- when an org is created, the root organizational unit (OU) is automatically created
