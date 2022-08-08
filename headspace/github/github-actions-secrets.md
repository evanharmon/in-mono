# GITHUB ACTIONS SECRETS

## Resources

- [Github Actions secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

## Limitations

- cannot be referenced in `if:` conditionals
- 64KB max length

## If Conditionals

set the secret as an environment variable. Reference the env var in the
`if:` conditional

## Reference secret in an action

```yml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v1
  with:
    role-to-assume: ${{ secrets.AWS_GITHUB_ACTIONS_ROLE_ARN }}
    aws-region: us-east-1
```

## Reference secret in a run script

```yml
- name: Test S3 access
  env:
    BUCKET_NAME: ${{ secrets.AWS_S3_BUCKET_21_DAY_CHALLENGE }}
  run: |
    aws s3 ls "$BUCKET_NAME"
```
