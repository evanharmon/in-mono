# LINUX SCRIPT CONDITIONALS

## If Statements

### Safely check for multi word command

```bash
if [ -x "$(command -v yarn)" ]; then
fi
```

### Check If Last / Prior Command Errored

```bash
access_key_id=$(echo "$creds_json" | jq --exit-status --raw-output '.Credentials.AccessKeyId')
rv="$?"
if [[ $rv -ne 0 || ! $access_key_id ]]; then
    echo "$pkg: failed to parse output for access_key_id: $creds_json" 1>&2
    return "$rv"
fi
```

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

### Check if environment variable is not set

`-n` checks if not an empty string

```bash
if [ -z "$CODESPACES" ] ; then
fi
```

### Check if environment variable is not set

`-n` checks if string is not null

```bash
if test -n "${CODESPACES+x}" ; then
fi
```

## Get Length / Number Of Characters

```bash
result="$(rg 'awscli')"
if [${#result} > 0]; then
	echo "found it"
fi
```