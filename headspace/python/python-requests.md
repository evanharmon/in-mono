# PYTHON REQUESTS

## Resources

- [Python requests package docs](https://requests.readthedocs.io/en/latest/)
- [Real Python requests](https://realpython.com/python-requests/)

## Install

```console
pipenv install requests
```

## Request examples

### Get request

```python
import requests
URL = 'http://127.0.0.1:3000'
response = requests.get(URL)
print(response.text)
```

### Post request

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

## Parsing

### Parse JSON from response

```python
response = requests.get(f'http://{node}/chain')
node_chain = response.json()
```
