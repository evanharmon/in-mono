# PULUMI INPUTS OUTPUTS APPLY

## Resources

- [Pulumi inputs and outputs apply](https://www.pulumi.com/docs/intro/concepts/inputs-outputs/#apply)
- [Lee Briggs pulumi apply guide](https://leebriggs.co.uk/blog/2021/05/09/pulumi-apply)

## Features

- access the raw value of an output

## Limitations

- does not run on `preview`

## Best practices

- don't allocate new resources inside `apply`
- avoid side effects

## Apply
- think of it as `wait for the apply, and then do something`

### Example

create a new output based on the output of another resource

```python
url = virtual_machine.dns_name.apply(
    lambda dns_name: "https://" + dns_name
)
```
