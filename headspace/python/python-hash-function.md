# PYTHON HASH FUNCTION

## Features
- takes a 'message' input and returns fixed size string of bytes
- each unique input should return a unique output
- same input always generates the same output

## Limitations
- collisions can occur where different input creates the same output

## Examples

### Simple hash function
no builtins - 
```python
def simple_hash(input_string):
    # Initialize hash value to 0
    hash_value = 0
    # Iterate through each character in the input string
    for char in input_string:
        # Add the ASCII value of the character to the hash value
        hash_value += ord(char)
    # note this can cause collisions!
    return hash_value % 10
```