# LINUX SCRIPT ARGUMENTS

## Features
- script name is stored in `$0`
- all other variables are sequentially stored in `$1`, `$2`, etc
- `$#` holds total number of arguments
- `$@` holds all arguments

## Set default for an arg

`ARG1=${1:-""}`

## Show error message on missing arg
`profile="${1:?Missing profile name}"`

## Set default for an arg from another script variable
```bash
KUBE_LATEST=$(curl -L -s https://dl.k8s.io/release/stable.txt | awk 'BEGIN { FS="." } { printf "%s.%s", $1, $2 }')
KUBE_VERSION=${1:-$KUBE_LATEST}
```

## Store all arguments in an array
`arr=("$@")`