# PYTHON REGEX

## Recipes

### Remove punctuation but leave whitespace

```python
import re

text = "Hello, World! This is a test."
# Regular expression pattern to remove punctuation
cleaned_text = re.sub(r'[^\w\s]', '', text)
print(cleaned_text)
```

### Remove punctuation including whitespace

```python
import re

text = "Hello, World! This is a test."
# Regular expression pattern to remove punctuation
cleaned_text = re.sub(r'[^\w]', '', text)
print(cleaned_text)
```