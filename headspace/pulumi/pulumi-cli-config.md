# PULUMI CLI CONFIG

## Resources

- [Pulumi cli config](https://www.pulumi.com/docs/reference/cli/pulumi_config/)

## Set configuration value

NOTE: does not warn if overwriting a config value

`pulumi config set aws:region us-west-2`

## Set via standard input

`cat my_key.pub | pulumi config set publicKey`

## Set secret

`pulumi config set --secret dbPassword S3cr37`

## Set secret from structured output

```bash
pulumi config set --path endpoints[0].url https://example.com
pulumi config set --path --secret endpoints[0].token accesstokenvalue
```
