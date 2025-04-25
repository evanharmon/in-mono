# ZSH

## Idempotent Append To Path

Only Append To PATH if not in path yet

```zsh
if [[ ":$PATH:" != *":$HOME/.rbenv/shims:$HOME/.rbenv/bin:"* ]]; then
    export PATH=$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH
fi
```

## History Search

CTRL+R to auto-complete search history
ex: doc then CTRL+R

## Debugging

### Output every command zsh runs at start
`ZSH_DEBUG_LOG=/tmp/zsh-debug.log zsh -x`

### List directories ZSh searches for autoloaded functions
`print -l $fpath`

## Rebuild zsh compinit completions
```zsh
# Debug scripts too
rm -f ~/.zcompdump*
exec zsh
```
