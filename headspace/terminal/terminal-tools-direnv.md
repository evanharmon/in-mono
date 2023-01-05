# TERMINAL TOOLS DIRENV

## Resources

- [Terminal tools direnv installation](https://direnv.net/docs/installation.html)
- [Terminal tools direnv setup](https://direnv.net/docs/hook.html)

## Install via curl

```console
mkdir -p ~/.local/bin && cd ~/.local/bin
export bin_path="$HOME/.local/bin"
curl -sfL https://direnv.net/install.sh | bash
chmod +x direnv
```

## Setup

place last in to .zshrc

```zsh
eval "$(direnv hook zsh)"
```
