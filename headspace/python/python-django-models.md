# PYTHON DJANGO MODELS

## Examples

```python
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.title
```

```python
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    created_date = models.DateField()
```

```python
from django.db import models

class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    order_date = models.DateField()
    total = models.DecimalField(max_digits=5, decimal_places=2)
```
