# VSCODE LAUNCH CONFIGS

## Example NodeJS

```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "skipFiles": ["<node_internals>/**"],
  "program": "${file}"
}
```

## Basic Rust

very few features and hard to use. I tried using the `CodeLLDB` plugin but no success on macOS Ventura with vscode

```json
{
  "name": "(OSX) Launch",
  "type": "lldb",
  "request": "launch",
  "program": "${workspaceRoot}/target/debug/routing",
  "args": [],
  "cwd": "${workspaceRoot}",
  "env": {
    "RUST_LOG": "debug"
  }
}
```
