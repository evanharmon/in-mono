# PYTHON UV

## Resources
- [UV docs](https://docs.astral.sh/uv/#highlights)

## Features
🚀 A single tool to replace pip, pip-tools, pipx, poetry, pyenv, twine, virtualenv, and more.

## Install
automatically installs to `$HOME/.local/bin`
`curl -LsSf https://astral.sh/uv/install.sh | sh`

## Init project
```bash
# if directory does not exist yet
uv init myproject
# in existing directory with just pyproject.toml
uv init --bare
```

## Virtual environment

### Create a custom named venv
uv uses `.venv` by default but some tools may expect `./venv`

`uv venv venv`

### Install to custom named venv

you can source it first to set `VIRTUAL_ENV`
`source ./venv/bin/activate`

or set a uv env var
`UV_PROJECT_ENVIRONMENT=venv uv add -r requirements.txt`

## Package management

### Install from requirements.txt
`uv add -r requirements.txt`

### Add a package
```bash
uv add ruff
# Specific version
uv add pulumi==3.163.0
# Specific version range constraints
uv add 'pulumi>=3.163.0,<4.0'
```

### Lock packages
`uv lock`

### Sync packages
`uv sync`

### Upgrade packages
`uv lock --upgrade`

## Tools

### Run a cli installed with pip
`uvx pulumi up`
