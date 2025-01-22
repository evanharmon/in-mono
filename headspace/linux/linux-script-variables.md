# LINUX SCRIPT VARIABLES

## Features
- should be lower-case with underscores

## Limitations
- case sensitive
- must be alphanumeric
- must use `_` underscores NOT `-` dashes

## Set basic variable

```bash
KUBE_VERSION=v1.30
```

then can be referenced in script via `$KUBE_VERSION`

can also set variable to result of command and use it elsewhere
```bash
kubeadm_version=$(kubeadm version)
echo "kubeadm version is: $kubeadm_version"
```

## Set variable with default value

```bash
BUCKET="${BUCKET:-mydefaultvalue}"
```

## Set current directory name with only basename

```bash
CURR_DIR="${CURR_DIR:-${PWD##*/}}"
```
