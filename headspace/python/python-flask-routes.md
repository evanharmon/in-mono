# PYTHON FLASK ROUTES

## Resources

- [Python Flask routing](https://flask.palletsprojects.com/en/2.2.x/quickstart/#routing)

## Features

- uses decorators

## Route Methods

```python
from flask import request

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()
```
