# PULUMI INPUTS AND OUTPUTS APPLY

## Resources

- [Pulumi inputs and outputs all](https://www.pulumi.com/docs/intro/concepts/inputs-outputs/#all)

## Features

- good for simple properties and array elements
- avoids the need to use `apply()` in simpler cases
- easier to read and write
- retains dependency information

## Usage

- access a property of an output to pass as an argument to a resource constructor

## Example

access properties and elements from output without `apply()`

```python
certificate = aws.acm.Certificate('cert',
    domain_name='example.com', validation_method='DNS')

record = aws.route53.Record('validation',
    records=[certificate.domain_validation_options[0].resource_record_value],
...
```
