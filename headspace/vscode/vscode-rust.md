# VSCODE RUSTo

## Setup rust-analyzer to work from a vscode workspace

go to workspace settings file and add the directory manually

```json
{
  "rust-analyzer.linkedProjects": [
    "${workspaceFolder}/evanharmon/in-mono/Cargo.toml" 
  ]
}
```