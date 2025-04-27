# PULUMI COMPONENTS

## Resources
- [Building a pulumi component](https://www.pulumi.com/docs/iac/using-pulumi/extending-pulumi/build-a-component/)

## Features
like terraform modules, but for pulumi

## Best practices
- don't include in git! The `sdk` folder is auto generated

## Outputs
for the component class, outputs MUST be set to `self` on the class

- each output must have a class output definition, be set to self, and included in register_outputs

## Examples

### Start a new python component
Assuming an adjacent components folder beside the pulumi project folder

1. ** Create new component**
```sh
mkdir -p ../components/eks && cd ../components/eks
# create a custom named virtualenv that pulumi expects
uv venv venv
# Use custom named virtualenv for uv init
UV_PROJECT_ENVIRONMENT=venv uv init
# remove auto-generated main.py
rm main.py
# add dependencies
UV_PROJECT_ENVIRONMENT=venv uv add 'pulumi>=3.163.0,<4.0'
UV_PROJECT_ENVIRONMENT=venv uv add 'pulumi-aws>=6.0.2,<7.0.0'
```

```sh
# create component - not including full component spec / file
touch vpc_dual_stack.py
# create main file
cat > __main__.py <<EOF
from pulumi.provider.experimental import component_provider_host
from vpc_dual_stack import VpcDualStack

if __name__ == "__main__":
    component_provider_host(name="eph-vpc", components=[VpcDualStack])
EOF
# create PulumiPlugin.yaml
cat > PulumiPlugin.yaml <<EOF
name: eph-vpc
description: "Various vpc setups following best practices"
runtime: python
EOF
```

2. **Now use the new component in the pulumi program**

```sh
# Append - adjust the below if you already have packages
cat >> Pulumi.yaml <<EOF
packages:
 eph-vpc: ../components/vpc
EOF
# Add component as pulumi package
uvx pulumi package add ../components/vpc
```
