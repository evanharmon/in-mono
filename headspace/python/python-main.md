# PYTHON MAIN

## Resources

- [Python Import Main Scope](https://docs.python.org/3/library/__main__.html)

## Features
- check whether current module is the main program being executed
- allows code to be imported as a module without running specific code
- common method for containing logic to run when running from command line

## Checking special variable `__name__`
When running a script: `python myscript.py`, the special variable `__name__`
is set to `"__main__"`

### Check For CLI Use

Check to see if module is running the main scope. Useful for testing

```python
def main():
    pass


if __name__ == "__main__":
    # execute only if run as a script
    # function could be called something else
    main()
```
