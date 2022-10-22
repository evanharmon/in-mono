# PYTHON HASH

## Resources

- [Python hashlib](https://docs.python.org/3/library/hashlib.html?highlight=hash#module-hashlib)

## Create bytehash

```python
encoded_str = 'test'.encode()
hashlib.sha256(encoded_str)
```

## Create sha256 string

have to use `hexdigest()` to get a valid string

```python
encoded_str = 'test'.encode()
hashlib.sha256(encoded_str).hexdigest()
```
