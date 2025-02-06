# PYENV

## Resources

- [PyEnv Github](https://github.com/pyenv/pyenv)
- [Pyenv Virtualenv Install](https://github.com/pyenv/pyenv-virtualenv)

## Features
good for managing multiple versions of python

## ZSHRC

```bash
if [ -d "$HOME/.pyenv" ]; then
        eval "$(pyenv init -)"
        eval "$(pyenv virtualenv-init -)"
fi
```

## Install python versions

`pyenv install 3.12.8`

## Set up virtual env

`pyenv virtualenv 3.12.8 myenv`

## Common Errors

### pyenv install fails

- [PyEnv GH Issue ModuleNotFound](https://github.com/pyenv/pyenv/issues/1066)

ModuleNotFoundError: No module named 'pyexpat'

on MAC OS 10.14

```bash
sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /
SDKROOT=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk/ pyenv install  3.7.5
```
