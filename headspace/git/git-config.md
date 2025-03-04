# GIT CONFIG

## Features
- local repo config stored in `.git/config`

## Set tab space width to four spaces

setting of 5 is to support +/- of git diff

`git config --global core.pager 'less -x1,5'`

## See config file objects

```bash
git config --global -l
git config --local -l
```

## Set MacOS To Use Keychain

`git config --global credential.helper osxkeychain`

## Save Git user/password Forever Ubuntu

`git config credential.helper store`

## Set Author username / email git config

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Set Proxy

`git config --local http.proxy http://1.1.1.1:80`

## Edit Local Config In Editor

edit git config in vim

`git config --local -e`

## Automatically Set Upstream

avoids having to set upstream when pushing to new branches

`git config --global branch.autosetupmerge always`

## Always recurse submodules

`git config --global submodule.recurse true`

## Example git config file

```
[core]
  repositoryformatversion = 0
  filemode = true
  bare = false
  logallrefupdates = true
  ignorecase = true
  precomposeunicode = true
  excludesFile = ~/.gitignore
  editor = nvim
  pager = less -F -X
[submodule]
  recurse = true
[push]
  autoSetupRemote = true
  recurseSubmodules = check
[rebase]
  autostash = true
[merge]
  conflictstyle = diff3
[alias]
  pushfwl = push --force-with-lease
```