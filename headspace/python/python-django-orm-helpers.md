# PYTHON DJANGO ORM HELPERS

## Reads

### Get all
```python
# as objects
items = Item.objects.all()
# as list of dicts to pass as JSON
items = Item.objects.all().values()
return JsonResponse(list(items), safe=False, status=200)  # just for demo - use serializers and HttpResponse instead
```

### Filter
```python
# single value
category = Category.objects.filter(name=data['category'])[0]
# List of dicts
categories = Category.objects.filter(name=data['category']).values()
return JsonResponse(list(categories), safe=False, status=200)  # just for demo - use serializers and HttpResponse instead
```

## Writes

### Save
```python
item = Item(name='Item 1')
item.save()
```

### Validate before save
```python
item = Item(name='Item 1')
item.full_clean()
item.save()
```
