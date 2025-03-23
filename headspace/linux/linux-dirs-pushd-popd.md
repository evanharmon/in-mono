# LINUX PUSHD POPD

## Features
push / pop directories on a stack

## Commands

### Change dir and push to old dir to stack
```bash
# Example - in home dir
# $HOME gets pushed to stack
pushd /etc
```
then you change `cd` around all you want, then pop back

### Pop back last dir in stack
`popd`