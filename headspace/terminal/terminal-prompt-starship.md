# TERMINAL PROMPT STARSHIP

## Resources

- [Terminal prompt starship getting started](https://starship.rs/guide/#%F0%9F%9A%80-installation)
- [Terminal prompt starship configuration](https://starship.rs/config/#prompt)

## Install

```console
mkdir -p ~/.local/bin && cd ~/.local/bin
export BIN_DIR="$HOME/.local/bin"
curl -sS https://starship.rs/install.sh | sh
```

## Setup

add to end of .zshrc

```console
eval "$(starship init zsh)"
```

## Configuration

configuration file is stored in home dir

```console
mkdir -p ~/.config && touch ~/.config/starship.toml
```
