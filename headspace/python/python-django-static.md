# PYTHON DJANGO STATIC

## Features
serve up static files

## settings.py
```python
# project/myproject/settings.py
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_DIRS = [
    BASE_DIR / "static",
]
```

## css
```css
/* project/static/css/style.css */
/* Stylesheet for our Django project */
body {
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
}

h1 {
    color: #00698f; /* Dark blue */
}

p {
    margin-bottom: 20px;
}
```

## templates

```html
<!-- project/myapp/templates/home.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Home Page</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>
<body>
    <h1>Welcome to my Django project!</h1>
    
    <!-- Your HTML content goes here -->
    This is the home page.
</body>
</html>
```

## view
