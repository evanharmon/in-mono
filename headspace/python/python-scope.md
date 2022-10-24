# PYTHON SCOPES

## Resources

- [RealPython namespaces and scopes](https://realpython.com/python-namespaces-scope/)

## Innermost scope

- searched first and contains local names

## Scope enclosing functions

- searched starting with nearest enclosing scope
- contains non-local and non-global names

## Next-to-last scope

- contains module's global names

## Outermost scope

- searched last
- contains built-in names

## Non-local scope

`nonlocal` used to revind variables found outside innermost scope

## No global / nonlocal statements

assignment to names goes in to innermost scope!!! crazy
