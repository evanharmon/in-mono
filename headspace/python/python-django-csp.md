# PYTHON DJANGO CSP

## Features
adds content security policies to a django app
helps prevent cross-site scxripting attacks by defining which sources of content are allowed to execute within an app.

## Steps

### Install
```bash
source .venv/bin/activate
pip install django-csp
```

### Create csp file
example
```bash
touch myproject/csp.json
cat > csp.json <<-EOF
{
    "default-src": "*",
    "script-src": ["'self'", "'https://cdn.example.com/script.js'"],
    "style-src": ["'self'", "'https://cdn.example.com/style.css'"],
    "img-src": ["'self'", "'data'", "'https://images.example.com/*'"]
}
EOF
```

### Add to settings
settings.py
```python
# add to apps
INSTALLED_APPS = [
    # ...
    'csp',
]

# match up with what's in csp.json
CSP_DEFAULT_SRC = "'self'"
CSP_SCRIPT_SRC = ["'self'", "'https://cdn.example.com/script.js'"]
CSP_STYLE_SRC = ["'self'", "'https://cdn.example.com/style.css'"]
CSP_IMG_SRC = ["'self'", "'data'", "'https://images.example.com/*'"]

CSP_REPORT_ONLY = True

# add to middleware
MIDDLEWARE = [
    # ...
    'csp.middleware.CSPMiddleware',
]
```
