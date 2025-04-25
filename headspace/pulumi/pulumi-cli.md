# PULUMI CLI

## Resources
- [Pulumi CLI](https://www.pulumi.com/docs/reference/cli/)

## Install

### macOS
just don't - use the script not `brew install pulumi/tap/pulumi`
might want to install to a specific location for multiple pulumi versions / repos

### Via script
should work for multiple platforms
installs to `~/.pulumi/bin`. Add to Path in `.*rc` file

`curl -fsSL https://get.pulumi.com | sh`

## Commands

### Login
`pulumi login`

### Add brew completions for bash
```bash
pulumi gen-completion bash > /opt/homebrew/etc/bash_completion.d/pulumi
brew completion link
# restart terminal or source
. ~/.bash_profile
```
