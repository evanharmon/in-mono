# PIP

## Resources

- [Pypi pip site](https://pypi.org/project/pip/)

## Install in user directory
for the rate occasions where this makes sense
`pip3 install --user neovim`

## Install from requirements.txt
`pip3 install -r requirements.txt`

## Update / upgrade a package
`pip3 install neovim --upgrade`

## Upgrade pip
`python -m pip install --upgrade pip`

## List dependencies of a package

can't do this via `pip`. Go to [PyPi site](https://pypi.org/).
Search for the package, visit the github repo, and search yourself.

## Config

### List config
`pip config list`

### Pip hanging around
- automatically add packages to requirements.txt
- requires pip 21.2 or greater
- saves dependencies

this is the closest to `npm install package --save-dev`. It's not fully supported as easily in python.

```bash
# setup config
pip config set format.file_handler.pip_filename requirements.txt
# add a package
pip install flask
# save dependencies
pip freeze > requirements.txt
```