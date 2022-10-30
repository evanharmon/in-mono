# VSCODE DEBUGGER

## Resources

- [VSCODE python debugging](https://code.visualstudio.com/docs/python/debugging)

## Python

vscode will always try and debug FROM the workspace / root directory.

make sure to set this in `settings.json` to use current working directory

```json
{
  "python.terminal.executeInFileDir": true
}
```
