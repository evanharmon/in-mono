# HOMEBREW

## Commands

### Update
`brew update`

### Checkup
`brew doctor`

### List Installed Packages
`brew list`

### Upgrade Package
`brew update mongodb`

### Add a brew supported completion
`brew install docker-completion`

### Link new completions
`brew completions link`

## Completions
completions are stored in `/opt/homebrew/etc/bash_completion.d`

### Check existing completions
`ls "$(brew --prefix)"/etc/bash_completion.d`

### Example adding a custom completion
```bash
pulumi gen-completion bash > $(brew --prefix)/etc/bash_completion.d/pulumi
brew completions link
# restart terminal or source
. ~/.bash_profile
```
