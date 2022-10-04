# PYTHON PYTEST

## Resources

- [Python PyTest Docs](https://docs.pytest.org/en/7.1.x/)

## Example

```python
def test1():
     assert SimpleSymbols("f++d+") == "false"
     assert SimpleSymbols("+d===+a+") == "false"
     assert SimpleSymbols("+d+") == "true"
```
