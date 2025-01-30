# LINUX SCRIPT ARGUMENTS

## Features
- script name is stored in `$0`
- all other variables are sequentially stored in `$1`, `$2`, etc

## Set default for an arg

`ARG1=${1:-""}`

## Set default for an arg from another script variable
```bash
KUBE_LATEST=$(curl -L -s https://dl.k8s.io/release/stable.txt | awk 'BEGIN { FS="." } { printf "%s.%s", $1, $2 }')
KUBE_VERSION=${1:-$KUBE_LATEST}
```