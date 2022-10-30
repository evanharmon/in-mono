# PYTHON JSON

## Resources

- [Python JSON](https://docs.python.org/3/library/json.html)

## Limitations

- susceptible to heavy use of CPU / memory on large malicious JSON

## Best Practices

- limit size of data to be parsed to avoid heavy CPU / mem use

## Translate Dictionary to JSON string

```python
data = dict({"name": "daniel", "age": 100})
json.dumps(data).encode()
```

## Sort Dictionary Keys before JSON dump

```python
data = dict({"name": "daniel", "age": 100})
json.dumps(data, sort_keys=True).encode()
```

## Convert Object to JSON

use copy to avoid getting a reference and changing data

```python
# block is a class
hashable_block = block.__dict__.copy()
encoded_str = json.dumps(hashable_block, sort_keys=True).encode()
```
