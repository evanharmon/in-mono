# FZF

## Resources
- [FZF github](https://github.com/junegunn/fzf)
- [tips](https://mike.place/2017/fzf-fd/)

## Install Via Homebrew

`brew install fzf`

## ZSH

### Setup

```bash
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
export FZF_DEFAULT_COMMAND="fd . $HOME"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd -t d . $HOME"
```

### FZF ZSH Setup Via Homebrew

```sh
if [ -e /usr/local/opt/fzf/shell/completion.zsh ]; then
  source /usr/local/opt/fzf/shell/key-bindings.zsh
  source /usr/local/opt/fzf/shell/completion.zsh
fi
```

### FZF ZSH Setup Via local installation

```sh
if [ -e ~/.fzf ]; then
  _append_to_path ~/.fzf/bin
  source ~/.fzf/shell/key-bindings.zsh
  source ~/.fzf/shell/completion.zsh
fi
```

### Fix Problems With Escape Key And ZSH VIM Mode

- [Github Issue Fix](https://github.com/junegunn/fzf/issues/164)
change iterm profile, keys, option key settings to `esc+` for left and right options keys

## Bash setup

```
# ~/.bashrc
# Set up fzf key bindings and fuzzy completion
eval "$(fzf --bash)"
```

## CLI commands

launch fuzzy finder: `CTRL+R`

## Fuzzy finder use

### Change Directory
`ESC` + `c` then fuzzy type directory, then press `return`
