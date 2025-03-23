# LINUX DIRS PUSHD POPD

## Features
dirs / push / pop directories on a stack
- change dirs with `cd ~<#>` its way easier

## Limitations
- dirs stack allows duplicates

## Best practices
don't use in scripts as only supported by `bash`, `zsh`, etc.

## Commands

### List Recent Directories
`dirs -v`

### Clear directory stack
`dirs -c`

### Change to a numbered directory
```bash
# Get the dir #
dirs -v
# change to that number
cd ~6
```

### Pushd

```bash
# push current dir
pushd
# push specific dir and move to the location
pushd $HOME/local
# move dir to top of stack - then change with popd
pushd +2
popd
```

### Pop dir from stack
default behavior with no args:
- remove zero item
- make next item your current working directory

```bash
# Pop last dir in stack
popd
# pop specific dir from stack
popd +4
```