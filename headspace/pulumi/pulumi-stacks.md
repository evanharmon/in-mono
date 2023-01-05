# PULUMI STACKS

## Resources

- [Pulumi stacks](https://www.pulumi.com/docs/intro/concepts/stack/)

## Features

- separate deployed instances of a Pulumi program
- used for diff environments like dev, staging, prod, or branch / per developer

## File Format

Separate yaml files such as `Pulumi.evan.yaml` represent stacks.
`Pulumi.yaml` reserved for project

## Outputs

stacks have exported outputs just like terraform

## Stack References

stack outputs can be used in other stacks using `stack references`

```python
from pulumi import StackReference

other = StackReference(f"acmecorp/infra/other")
other_output = other.get_output("x");
```
