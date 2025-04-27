# PULUMI CONFIGURATION

## Resources

- [Pulumi configuration](https://www.pulumi.com/docs/intro/concepts/config/)
- [Pulumi config access configuration from code](https://www.pulumi.com/docs/intro/concepts/config/#code)

## Features

- supported via `config` cli command or `Config` object

## Limitations

- configuration file settings only used by default provider
- precendence across providers can vary: `configuration file, envs, args`
- multi-line multi-value configs are tougher to parse / re-order

## Best practices

- use namespaced config like `eph:mysetup:field1` where possible and not too large
- only use multi-line multi-value configs for really complex objects

## Configuration keys

format is `[<namespace>:]<key-name>`

## Structured multi-value configuration values

```sh
pulumi config set --path 'data.active' true && pulumi config set --path 'data.nums[0]' 1 && pulumi config set --path 'data.nums[1]' 2 && pulumi config set --path 'data.nums[2]' 3

// output
config:
  proj:data:
    active: true
    nums:
    - 1
    - 2
    - 3
```

## Python example

```python
config = pulumi.Config()
name = config.require('name')
lucky = config.get_int('lucky') or 42
print(f'Hello, {name} -- I see your lucky number is {lucky}!')
```

## Get namespaced config
have to use `pulumi.Config()` to get parent

```yaml
config:
  aws:region: us-east-1
  aws:profile: eph-music-dev
  aws:defaultTags:
    tags:
      Environment: dev
      Project: eks-ipv6-auto
      StackName: eph
      StackType: personal
      Owner: Evan Harmon
      CostCenter: Cloud
```

```python
_aws_config = pulumi.Config("aws")
AWS_PROFILE = _aws_config.require("profile")
DEFAULT_AWS_REGION = _aws_config.require("region")
```
