# LUA LUAROCKS

## Resources

- [Lua luarocks installation](https://github.com/luarocks/luarocks/wiki/Installation-instructions-for-Unix)

## Brew Install

```console
brew install luarocks
```

## Manual Installation

assuming lua installed via homebrew for now
remember `/opt/homebrew/include` are symlinks that may not be followed by programs
installs to `/usr/local/bin`

```console
mkdir -p ~/.local/bin && cd ~/.local/bin
curl -JLO https://luarocks.org/releases/luarocks-3.9.2.tar.gz
tar zxpf luarocks-3.9.2.tar.gz
cd luarocks-3.9.2
./configure --with-lua-include=/opt/homebrew/Cellar/lua/5.4.4_1/include/lua
make
sudo make install
```
