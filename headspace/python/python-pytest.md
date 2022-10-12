# PYTHON PYTEST

## Resources

- [Python PyTest Docs](https://docs.pytest.org/en/7.1.x/)
- [Exercism PyTest Guide](https://exercism.org/docs/tracks/python/tests)

## Install

```console
pipenv install pytest pytest-cov pytest-cache pytest-subtests
```

## Example

```python
def test1():
     assert SimpleSymbols("f++d+") == "false"
     assert SimpleSymbols("+d===+a+") == "false"
     assert SimpleSymbols("+d+") == "true"
```

## Exit early on failure

```console
pytest -x
```
