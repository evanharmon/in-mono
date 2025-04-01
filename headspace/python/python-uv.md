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

## Package management

### Add a package
`uv add ruff`

### Lock packages
`uv lock`

### Sync packages
`uv sync`
