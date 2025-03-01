# PYTHON DJANGO APP

## Features
self-contained module for a single application or feature for a project.

## Contents

### models.py
data models with ORM

### views.py
handle those HTTP requests and return responses.
The glue between templates and db queries.
- process incoming requests
- interact with models
- render templates

### urls.py
URLs map to views which handle requests.
General and specific routes can be defined here.

### forms.py
optional
forms eg. user input. Uses django's built-in form framework

### admin.py
definitions for custom admin interfaces
- manage models in django admin interface

### tests.py
unit tests or integration tests for app code
- uses django's testing framework

### templates directory
HTML templates specific to the app.
- tags
- filters
- inheritance

### static directory
optional
serve static files

### __init__.py
identifies the app as a package.
- can be left empty
- supports additional initialize code