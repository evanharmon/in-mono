# AWS SINGLE SIGN ON
single sign on service in AWS to centrally manage SSO to AWS accounts and cloud applications

## Resources
- [AWS Single Sign On Docs](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html)
- [AWS Blog Create and Manage users with AWS SSO](https://aws.amazon.com/blogs/security/how-to-create-and-manage-users-within-aws-sso/)

## Features
- integrated in to AWS Organizations
- manage users and groups
- integrate Microsoft AD via AWS Directory Service
- compatible with many cloud applications like Salesforce, Dropbox, Slack, etc
- has no impact on user, roles, or policies already managed in IAM
- no additional cost
- supports any SAML 2.0 IdP such as Azure AD, Okta Universal Directory, etc

## Basic setup
From mgmt account, with all features enabled:

- [x] Enable AWS SSO from mgmt account
- [x] Create Administrators SSO group
- [x] Create admin permissions set
- [x] Create my user
- [x] Assign Administrators to MGMT account with admin permissions set
- [x] confirm successful login
- [x] confirm admin permissions
