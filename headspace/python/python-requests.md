# PYTHON REQUESTS

## Resources

- [Python requests package docs](https://requests.readthedocs.io/en/latest/)
- [Real Python requests](https://realpython.com/python-requests/)

## Install

```console
pipenv install requests
```

## Import

```python
import requests
```

## Post request

```python
response = requests.post(url, timeout=10000, json={
    'sender': sender,
    'recipient': recipient,
    'amount': amount,
    'signature': signature})
if response.status_code in [400, 500]:
    print('Transaction declined, needs resolving.')
    return False
```

## Parse JSON from response

```python
response = requests.get(f'http://{node}/chain')
node_chain = response.json()
```
