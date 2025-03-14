# PYTHON DJANGO QUERY PARAMETERS

## Features
query params - passed in as part of url.
- no need to include in `urls.py`

## Query params

### Filtered
`curl -X GET 'http://localhost:8000/books/?author=John'`

```python
# models.py
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    published_date = models.DateField()

# views.py
from django.shortcuts import render
from .models import Book

def book_list(request):
    books = Book.objects.filter(author=request.GET.get('author'))
    return render(request, 'book_list.html', {'books': books})
```

### Pagination
`curl -X GET 'http://localhost:8000/users/?page=3'`

```python
# models.py
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    created_date = models.DateField()

# views.py
from django.shortcuts import render
from .models import User
from django.core.paginator import Paginator, EmptyPage

def user_list(request):
    users = User.objects.all()
    paginator = Paginator(users, 10)
    page_number = request.GET.get('page')
    try:
        page_obj = paginator.page(page_number)
    except ValueError:
        page_obj = paginator.page(1)
    return render(request, 'user_list.html', {'page_obj': page_obj})
```

### Sorted query
`curl -X GET 'http://localhost:8000/products/'`

```python
# models.py
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    created_date = models.DateField()

# views.py
from django.shortcuts import render
from .models import Product

def product_list(request):
    products = Product.objects.all().order_by('-price')
    return render(request, 'product_list.html', {'products': products})
```

### Filtered & sorted
`curl -X GET 'http://localhost:8000/orders/?customer=John'`

```python
# models.py
from django.db import models

class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    order_date = models.DateField()
    total = models.DecimalField(max_digits=5, decimal_places=2)

# views.py
from django.shortcuts import render
from .models import Order

def order_list(request):
    customer_name = request.GET.get('customer')
    orders = Order.objects.filter(customer_name=customer_name).order_by('-total')
    return render(request, 'order_list.html', {'orders': orders})
```