# LINUX SCRIPTS CONDITIONALS FILE OPERATORS

## Operator checks
true / false if:
- `-e` file exist
- `-d` file exist and is a directory
- `-s` file exists and has size greater than zero
- `-x` file is executable
- `-w` file is writeable

## Recipes

### Check If Folder Exists And Remove

```bash
DIR=/tmp/dir.lock
if [ -d "$DIR" ]; then
    printf '%s\n' "Removing Lock ($DIR)"
    rm -rf "$DIR"
fi
```

### Check file exists

```bash
if [ -f $HOME/.zshrc ]; then
	# something something
fi
```

## Check directory exists

```bash
if [ -d $HOME/.local ]; then
	# something something
fi
```
