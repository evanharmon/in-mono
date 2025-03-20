# LINUX SCRIPT CONDITIONALS

## Limitations
- don't put `*bc*` patterns inside double quotes

## if statements
- conditional check wrapped in `[ ]`
- there should be a space between brackets `[ $env_var = 'dev' ]`

```bash
if [ ]; then
elif [ ]; then
else
fi
```

## Recipes

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

### Check if argument not provided
```bash
if [ -z "$1" ]; then
    echo "Missing first argument."
fi
```

### Check if environment variable is not set

`-z` checks if not an empty string

```bash
if [ -z "$CODESPACES" ]; then
    # do something different since not $CODESPACES
fi
```

### Check if environment variable is not set

`-n` checks if string is not null

```bash
if test -n "${CODESPACES+x}" ; then
fi
```

### Get Length / Number Of Characters

```bash
result="$(rg 'awscli')"
if [ ${#result} > 0 ]; then
	echo "found it"
fi
```