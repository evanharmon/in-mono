# PYTHON PYTEST

## Resources

- [Python PyTest Docs](https://docs.pytest.org/en/7.1.x/)
- [Exercism PyTest Guide](https://exercism.org/docs/tracks/python/tests)

## Install

`pipenv install pytest pytest-cov pytest-cache pytest-subtests`

## Example

```python
def test1():
     assert SimpleSymbols("f++d+") == "false"
     assert SimpleSymbols("+d===+a+") == "false"
     assert SimpleSymbols("+d+") == "true"
```

## Exit early on failure

`pytest -x`

## Run single named test

```console
pytest -k 'test_non_empty_list_contains_empty_list'
```
