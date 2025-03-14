# PYTHON DJANGO SQLITE3 WRITE

## Example

```python
# models.py
from django.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

# views.py
from django.shortcuts import HttpResponse
from .models import MyModel
import json

def write_to_db(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        new_model = MyModel(name=data['name'], description=data['description'])
        new_model.save()
        return HttpResponse('Data written to database!')
    else:
        return HttpResponse('Invalid request method.')

# urls.py
from django.urls import path
from .views import write_to_db

urlpatterns = [
    path('write-to-db/', write_to_db, name='write_to_db'),
]
```