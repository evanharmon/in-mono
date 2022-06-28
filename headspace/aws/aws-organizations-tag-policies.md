# AWS ORGANIZATIONS TAG POLICIES
standardize tags across resources in your organization accounts

## Resources
- [AWS Organization Tag Policies Docs](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
- [AWS Recommended Getting Started with tag policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-getting-started.html)
- [AWS Organization Tag Policies Best Practices](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-best-practices.html)
- [AWS CloudWatch Event to monitor noncompliant tags](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-cwe.html)
- [AWS Organizations SCP Example Require Tag](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html#example-require-tag-on-create)
- [AWS Organizations SCP tagKey Example](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html#example-require-restrict-tag-mods-to-admin)

## Requirements
- origanization must have all features enabled

## Limitations
- resources that have never had tags attached don't show as noncompliant in reports

## AWS Organizations Service
used to manage tag policies

## AWS Resource Groups
used to managed compliance of resources with tag policies