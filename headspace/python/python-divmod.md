# PYTHON DIVMOD

## Features
returns both the quotient and remainder of an integer division operation

## Examples

### Convert seconds to hours, minutes, seconds
```python
hours, remainder = divmod(total_seconds, 3600)
minutes, seconds = divmod(remainder, 60)
```