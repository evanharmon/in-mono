# NEOVIM TREESITTER

## Resources

- [Neovim Treesitter code folding guide](https://www.jmaguire.tech/posts/treesitter_folding/)

## invalid node error

run the below command in nvim
`:echo nvim_get_runtime_file('parser', v:true)`

delete the extra parser outside treesitter dirs

```console
rm -rf /Users/evanharmon/.local/bin/nvim-macos/lib/nvim/parser
```
