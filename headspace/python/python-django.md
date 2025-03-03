# PYTHON DJANGO

## Resources

- [Python django vscode tutorial](https://code.visualstudio.com/docs/python/tutorial-django)

## Start a project
WARNING: django auto creates a SECRET_KEY in `settings.py`.
this really should be done via an ENV and a default value for local dev.

```bash
# Setup directory and venv
mkdir django_playground && cd django_playground 
python3 -m venv .venv
source .venv/bin/activate
# Install dependencies to create django app
python -m pip install --upgrade pip
python -m pip install django
# Setup django project directory
django-admin startproject web_project .
# Create DB
python manage.py migrate
# Create django app directory
python manage.py startapp myapp
```

### Created directories
```
├── db.sqlite3
├── manage.py
├── myapp # app directory
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
└── web_project # project directory
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

### Adjust config settings

```conf
INSTALLED_APPS = [
    'myapp', # app we created
    'csp',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

### Adjust view and map to URL
```conf
# project/myapp/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse('Hello, world!')
```

```py
# project/web_project/urls.py
from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.home, name='home'),
]
```

### Run app
python manage.py runserver