# PYTHON STRING CHECKS

## Checks
```python
# Check if string is a digit
"123".isdigit() # True
# Check if alpha letter
"ABC".isalpha()
# Check if alpha and/or numeric
"ABC123".isalnum()
```

## Common scenarios

### isdigit()

```python
# Can't handle negative numbers
"-3".isdigit() # False
```

### isalpha()

```python
# Doesn't support punctuation
"C.".isalpha() # False
```

### isalnum()
```python
# Will return true even if only alpha or numeric
"123".isalnum() # True
```