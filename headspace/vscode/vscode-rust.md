# VSCODE RUST

## Setup rust-analyzer to work from a vscode workspace

go to workspace settings file and add the directory manually

This will break if you move the `github.code-workspace` to a diff folder!
adjust the value below as well to fix it

```json
{
  "rust-analyzer.linkedProjects": [
    "${workspaceFolder}/in-mono/Cargo.toml" 
  ]
}
```