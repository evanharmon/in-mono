# PYTHON STRINGS RECIPES

## Reverse each word in a sentence
```python
' '.join(word[::-1] for word in "This is a sentence".split())
```

## check against punctuation list
```python
import string

'test!'.endswith(string.punctuation)
```