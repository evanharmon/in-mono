# AWS ORGANIZATIONS CENTRALIZE ROOT ACCESS

## Resources
- [AWS centralize root access](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-enable-root-access.html?icmpid=docs_iam_help_panel)
- [AWS centralize root access for member accounts](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html?icmpid=docs_iam_help_panel#id_root-user-access-management)
- [AWS centralize root access user privileged task](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user-privileged-task.html?icmpid=docs_iam_help_panel)

## Features
allows only mgmt account to have ROOT user creds
- prevents root user credential recovery and access at scale

## Best practices
- set one other account for delegated admin for centralized root access

## Steps via CLI
all commands must be run from the MANAGEMENT account profile.
I use sso so it's easiest to just generate one time CLI creds for use in terminal
on management account.

1. **Enable AWS Service Access for IAM**
```sh
aws organizations enable-aws-service-access \
  --service-principal iam.amazonaws.com
```

2. **Enable Root Credentials Management**
allows root account and delegated account to delete root user creds for member accounts
`aws iam enable-organizations-root-credentials-management`

3. **Enable Root Sessions**
allow management account / delegated administrator to perform certain tasks requiring root user creds
`aws iam enable-organizations-root-sessions`

4. **Delegate IAM Root Cred Mgmt To Another Account**
typically some type of other security / admin account
```sh
aws organizations register-delegated-administrator \
  --account-id <DELEGATED_ACCOUNT_ID> \
  --service-principal iam.amazonaws.com
```

5. **Delete Root Creds**
LEAVE root credentials on the delegated account!!

log in to mgmt console, IAM, and `root access management`.
take privileged action and remove root creds on all accounts EXCEPT:
- management
- delegated account
