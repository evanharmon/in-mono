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
