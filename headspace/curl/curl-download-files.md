# CURL DOWNLOAD FILES

## Resources

- [Curl downloading as wrong file type](https://linuxhandbook.com/curl-downloading-html-file/)

## Download file without specifying filename

```console
curl -Lo $HOME/.cache
    https://download.docker.com/mac/stable/Docker.dmg
```

## Curl downloading html file

sometimes curl doesn't get the file type correct on download
oftentimes its down to redirects

if `file mydownload.tar.gz` shows up as `html` then do this:

```console
curl -JLO https://luarocks.org/releases/luarocks-3.9.2.tar.gz
```

`-L` handles redirects correctly for file type

## Create Directories On File Save

```console
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
