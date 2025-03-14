# PYTHON DJANGO CUSTOM 404

## Example

```python
# myproject/views.py
from django.shortcuts import render

def custom_404(request):
    return render(request, '404.html', status=404)

# myproject/urls.py
from django.urls import path


# This will handle all 404 errors in your application
handler404 = 'myapp.views.custom_404

urlpatterns = [
    # ... other URL patterns ...
]
```

```html
<!-- myproject/templates/404.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Custom 404 Page</title>
</head>
<body>
    <h1>Page not found!</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="{% url 'index' %}">Go back to the home page</a>
</body>
</html>
```