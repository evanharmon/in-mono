# RENAME

## Resources

- [Rename SO rename all files](https://stackoverflow.com/questions/33127000/renaming-all-files-in-one-folder-on-mac-os-x-yosemite)

## Rename Files In A Directory

note the use of regex - greedy here
rename all files from `neovim-` to `vim-nvim-`
Dry-run

```console
rename -n 's/neovim-/vim-nvim-/g' *
```

For Real

```console
rename 's/neovim-/vim-nvim-/g' *
```
