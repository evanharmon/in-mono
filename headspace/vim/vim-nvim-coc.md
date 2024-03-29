# VIM NVIM COC

## Resources

- [Nvim coc Github](https://github.com/neoclide/coc.nvim)
- [Nvim coc Language Servers Wiki](https://github.com/neoclide/coc.nvim/wiki/Language-servers)

## CLANGD Setup

with typical `./build` directory for cmake / ninja

```json
{
  "languageserver": {
    "clangd": {
      "command": "clangd",
      "args": ["--background-index -compile-commands-dir=build"],
      "rootPatterns": [
        "compile_flags.txt",
        "compile_commands.json",
        "build/compile_commands.json",
        ".vim/",
        ".git/",
        ".hg/"
      ],
      "filetypes": ["c", "cpp", "objc", "objcpp"]
    }
  }
}
```

## CCLS Setup

```json
{
  "ccls": {
    "command": "ccls",
    "filetypes": ["c", "cpp", "objc", "objcpp"],
    "rootPatterns": [
      ".ccls",
      "compile_commands.json",
      "build/compile_commands.json",
      ".vim/",
      ".git/",
      ".hg/"
    ],
    "initializationOptions": {
      "cache": {
        "directory": "/tmp/ccls"
      },
      "compilationDatabaseDirectory": "build"
    }
  }
}
```
