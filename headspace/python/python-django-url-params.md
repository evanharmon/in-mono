# PYTHON DJANGO URL / QUERY PARAMETERS

## URL Parameters

### String
```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('books/<str:title>/', views.book_search),
]

# views.py
def book_search(request, title):
    # Access the title parameter
    print(title)
    return HttpResponse(f"Search results for {title}")
```

### Multiple

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('books/<int:book_id>/<str:title>/', views.book_details),
]

# views.py
def book_details(request, book_id, title):
    # Access the book_id and title parameters
    print(book_id)
    print(title)
    return HttpResponse(f"Book {book_id} details for {title}")
```

### Slug

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('books/<slug:slug>/', views.book_details),
]

# views.py
def book_details(request, slug):
    # Access the slug parameter
    print(slug)
    return HttpResponse(f"Book details for {slug}")
```