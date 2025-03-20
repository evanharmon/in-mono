# PYTHON DJANGO ORM Q ADVANCED QUERIES

## Features
complex queries. Note double underscores.
- `|` is OR
- `&` is AND
- `<field>__icontains` - case-insensitive contains
- `<field>__contains` - case-sensitive contains
- `<field>__gt` - greater than
- `<field>__lt` - less than

## Q complex queries

### Multiple query checks

```python
from django.db.models import Q

categories = Category.objects.filter(Q(name='car' | Q(category__icontains='auto'))).values()
```