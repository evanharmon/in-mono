# PYTHON HEX

## Resources

- [Python Hex SO how to read](https://stackoverflow.com/questions/34687516/how-to-read-binary-files-as-hex-in-python)

## Read Binary File And Print As Hex

```python
import binascii

with open('data.geno', 'rb') as f:
    hexdata = binascii.hexlify(f.read())
```
