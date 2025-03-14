# PYTHON DJANGO MODELS HELPERS

## Get all
`items = Item.objects.all()`

## Filter
`category = Category.objects.filter(name=data['category'])[0]`

## Save
```python
item = Item(name='Item 1')
item.save()
```

## Validate before save
```python
item = Item(name='Item 1')
item.full_clean()
item.save()
```
