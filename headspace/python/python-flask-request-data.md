# PYTHON FLASK REQUEST DATA

## Resources

- [Python Flask request data](https://flask.palletsprojects.com/en/2.2.x/quickstart/#accessing-request-data)

## Import

```python
from flask import request
```

## Access request body data

`request.get_json()` returns a dictionary

```python
values = request.get_json()
if not values:
    response = {'message': 'No data found.'}
    return jsonify(response), 400
required_fields = ['recipient', 'amount']
if not all(field in values for field in required_fields):
    response = {'message': 'Required data is missing.'}
    return jsonify(response), 400
recipient = values['recipient']
amount = values['amount']
```

## Get items from request body

```python
values = request.get_json()
username = values.get('username')
```
