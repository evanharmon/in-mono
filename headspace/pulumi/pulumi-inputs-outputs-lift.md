# PULUMI INPUTS AND OUTPUTS LIFT

## Resources

- [Pulumi inputs and outputs lift](https://www.pulumi.com/docs/intro/concepts/inputs-outputs/#lifting)

## Features

- allows joining multiple outputs

## Usage

- compute a new output value from multiple resource output values

## Example

create a new output based on the output of another resource

```python
certificate = aws.acm.Certificate('cert',
    domain_name='example.com',
    validation_method='DNS'
)

record = aws.route53.Record('validation',
    records=[
        # Need to pass along a deep subproperty of this Output
        certificate.domain_validation_options.apply(
            lambda domain_validation_options: domain_validation_options[0]['resourceRecordValue']
        )
    ],
    ...
)
```
