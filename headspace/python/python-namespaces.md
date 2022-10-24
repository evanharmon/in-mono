# PYTHON NAMESPACES SCOPES

## Resources

- [RealPython namespaces and scopes](https://realpython.com/python-namespaces-scope/)

## Features

- provides mapping from names to objects
- currently implemented as dictionaries
- namespaces names have no relation to one another

## Main namespace

- called the `__main__` namespace

## Builtins namespace

- created when interpreter starts
- contains builtin functions
- called the `builtins` namespace
- never deleted

## Global module namespaces

- created when module definition read in
- normally lasts until interpreter quits

## Functions / local

- created when function called
- deleted / forgotten when function returns or raises exception
