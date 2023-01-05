# PULUMI SECRETS

## Resources

- [Pulumi secrets](https://www.pulumi.com/docs/intro/concepts/secrets/)

## Features

- pulumi handles the encryption
- any output derived from a secret will also be marked secret
- tracks transitive use of secret to avoid leaking to state file

## Limitations

- `apply` and `Output.all` converts secrets to plaintext for the callback - don't expose it!
- on pulumi up, secret values are decrypted and available as plaintext at runtime

## Programatically create secret

```python
cfg = pulumi.Config()
param = ssm.Parameter("a-secret-param",
    type="SecureString",
    value=cfg.require_secret("my-secret-value"))
```

## Programatically access secret

```python
import pulumi

config = pulumi.Config()
print(config.require('name'))
print(config.require_secret('dbPassword'))
```

## Use AWS KMS for secret encryption

configured on stack

```console
pulumi stack init my-stack --secrets-provider="awskms://1234abcd-12ab-34cd-56ef-1234567890ab?region=us-east-1"
```
