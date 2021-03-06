# AWS IAM POLICIES
Notes on managing policies in AWS

## Resources
- [AWS IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [AWS IAM Docs Service Authorization Reference](https://docs.aws.amazon.com/service-authorization/latest/reference/reference.html)

#### Check If Policy In Use

In the AWS Console, click on the policy's tab `Policy Usage`. This will list
where the policy is attached.

## Allow users to manage their own credentials

- [AWS Doc with policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage-no-mfa.html)
- [AWS Docs policy with MFA enforcement](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage.html)

I prefer the second which also enforces MFA for long term creds like access keys