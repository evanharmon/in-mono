# PULUMI CONFIGURATION

## Resources

- [Pulumi configuration](https://www.pulumi.com/docs/intro/concepts/config/)
- [Pulumi config access configuration from code](https://www.pulumi.com/docs/intro/concepts/config/#code)

## Features

- supported via `config` cli command or `Config` object

## Limitations

- configuration file settings only used by default provider
- instanciation of a provider object will not have config values
- precendence across providers can vary: `configuration file, envs, args`

## Configuration keys

format is `[<namespace>:]<key-name>`

## Structured multi-value configuration values

```console
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
config = pulumi.Config();
name = config.require('name');
lucky = config.get_int('lucky') or 42
print(f'Hello, {name} -- I see your lucky number is {lucky}!')
```
