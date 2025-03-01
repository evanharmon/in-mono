# PYTHON DJANGO PROJECT

## Features
single top level directory for all the project's code.
- contains individual app directories
- defines overall structure and config

## Contents

### manage.py
used for interacting with a django project.
commands:
- `runserver` 
- `migrate`: migrate dbs
- `shell`: custom scripts


### settings.py
settings for the entire django project
- installed apps
- db connections
- template directories

### urls.py
define URL patterns for the entire project

### wsgi.py
web server gateway interface server.
Provides standard way to interact with web servers like apache or nginx

### asgi.py
optional: asynchronous server gateway interface
config for the ASGI server.
allows running async tasks in the background which is useful for real-time applications