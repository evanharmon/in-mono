# PYTHON DJANGO MIDDLEWARE

## Call next middleware in chain
simple - done when you're middleware calls get_response
`self.get_response(request)`

## Logging example

```bash
mkdir myapp/middleware
# make sure it's a module so other file can be imported
touch myapp/middleware/__init__.py
```

```python
# logging_middleware.py
import logging
from django.http import HttpResponse

# setup logger just for this middleware
logger = logging.getLogger(__name__)
handler = logging.StreamHandler()  # output to terminal
# set the formatter and attach to handler
formatter = logging.Formatter(fmt="%(asctime)s %(levelname)s; %(message)s")
handler.formatter = formatter
# attach the handler and set default
logger.addHandler(handler)
logger.setLevel(logging.INFO)


class LoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Set the logger name to the request's path
        logger_name = f"app.{request.path}"

        logger = logging.getLogger(logger_name)

        # Log the request start time
        logger.info(f"Request Start: {request.path} ({request.method})")

        response = self.get_response(request)

        return response

    def process_exception(self, request, exception):
        # Log exceptions
        logger_name = f"app.{request.path}"
        logger = logging.getLogger(logger_name)
        logger.error(f"Request Exception: {request.path} ({request.method}) - {exception}")
```

```python
# settings.py
MIDDLEWARE = [
    # ...,
    'myapp.middleware.logging_middleware.LoggingMiddleware'
]
```

## Common middleware settings.py
```python
# project/myproject/settings.py
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'myapp.middleware.CustomMiddleware',  # Custom middleware aka myapp/middleware/custom_middleware.py
]
```

## Log request info from META dictionary

```python
print(f"IP: {request.META.get('REMOTE_ADDR', 'unknown')}")
print(f"User Agent: {request.META.get('HTTP_USER_AGENT', 'unknown')}")
print(f"Referer: {request.META.get('HTTP_REFERER', 'unknown')}")
print(f"Host: {request.META.get('HTTP_HOST', 'unknown')}")
```