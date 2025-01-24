# VISUAL STUDIO PYTHON

## Resources

- [VSCODE python environments](https://code.visualstudio.com/docs/python/environments)

## Interpreter

remember to set interpreter to virtual env for project you are working on

## Deactivate

deactivate virtual env automatically activated in terminal

`deactivate`

## Local virtual env setup

gets set on local machine User settings. I use a per folder .venv setup though.

```json
{
  "python.venvPath": "~/.local/share/virtualenvs"
}
```

## Common issues
`(venv)` keeps popping up in terminal prompt.
adjust settings.json
```json
{
  "python.terminal.activateEnvironment": false,
  "python.terminal.activateEnvInCurrentTerminal": false
}
```

Clear the workspace python interpeter cache / settings via CMD + P