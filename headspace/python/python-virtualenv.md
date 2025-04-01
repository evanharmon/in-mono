# PYTHON VIRTUALENV

## Resources

- [PyPi virtualenv](https://pypi.org/project/virtualenv/)

## Features
created isolated python environments per project

## Install
`pipx install virtualenv`

## Create a virtualenv
`virtualenv .venv`
or
`python3 -m venv .venv`

## Activate
don't forget to activate!
`source .venv/bin/activate`

sets the `VIRTUAL_ENV` environment variable

## Common issues

### venv not being used even when VIRTUAL_ENV set
has the folder been moved / renamed? This will break the hard-coded paths in the .venv folder