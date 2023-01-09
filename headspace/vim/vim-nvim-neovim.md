# VIM NEOVIM

## Resources

- [Neovim site](https://neovim.io/)
- [Neovim install docs](https://github.com/neovim/neovim/wiki/Installing-Neovim)

## Install

don't install via brew. Install directly to ~/.local/bin

```console
mkdir -p ~/.local/bin && cd ~/.local/bin
curl -fLo nvim-macos.tar.gz https://github.com/neovim/neovim/releases/download/stable/nvim-macos.tar.gz
xattr -c ./nvim-macos.tar.gz
tar xzvf nvim-macos.tar.gz
```
