# VIM NVIM LSP

## Auto format on save

```lua
cmd([[ autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_sync() ]])
```
