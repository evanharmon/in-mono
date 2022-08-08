# GITHUB IAM IDENTITY PROVIDER

## Resources

- [Github Docs Configure IAM Identity Provider](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- [Github Docs aws-ations/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role)
- [AWS IAM add identity provider](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)
- [AWS IAM create role for github OIDC](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html#idp_oidc_Create_GitHub)

## Create AWS Identity Provider

- add provider url: `https://token.actions.githubusercontent.com`
- add audience: `sts.amazonaws.com`
- click `get thumbprint`
- click `add provider`

## Create IAM Policy

- create an AWS IAM managed policy with limited permissions needed for github actions deploy

## Create AWS Github Actions Role

no need to 'assign role' in the console, automatically hooked up via trust policy

- create new `web identity` role with the identity provider set to github as added above
- attach IAM policy to `GithubActions`
- create role
- edit role trust policy to limit to specific repo / repo org / branch

```json
"Condition": {
  "StringEquals": {
    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
    "token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```
