# PULUMI INPUTS AND OUTPUTS

## Resources

- [Pulumi inputs and outputs](https://www.pulumi.com/docs/intro/concepts/inputs-outputs/)

## Features

- outputs behave a lot like async `promises`
- pulumi uses outputs to track dependencies

## Supports string interpolation

pulumi has special helpers for this

```python
# concat takes a list of args and concatenates all of them into a single output:
url = Output.concat("http://", hostname, ":", port, "/")
# format takes a template string and a list of args or keyword args and formats the string, expanding outputs correctly:
url2 = Output.format("http://{0}:{1}/", hostname, port);
```

## Convert Input to Output with Interpolation

```python
def split(input):
    output = Output.from_input(input)
    return output.apply(lambda v: v.split())
```
