# UNIX LINUX SHELL VARIABLES

## Check What Shell is Being Used

```sh
echo $0
```

## Reference Current Working Directory

Current working directory is an OS level concept

```console
${CWD}
```

## Reference Present Working Directory

```console
${PWD}
```

## Assign Variable

```console
a=879
```

## Assign Path To Variable

```console
Vf=./Container-Files/Vim-7.4.Tar.Bz2
```

## Assign Command To A Variable

```console
a=ls -la``
```

## Remove An Env Variable

```console
unset NODE_ENV
```

## View Shell Variables

```console
set | less
```

## View Env Variables

`env`
or
`printenv`

## Export Env Variable To Shell (Case Sensitive)

```console
export NVIM_TUI_ENABLE_TRUE_COLORS=1
```

## Single Env Variable For Command

```console
CID=$(docker ps -lq)
```

## Use Env Variable In Command Line

```console
docker stats $CID
```

## Command Substitution

Pipe output to a variable

```console
var4=$(aws ec2 describe-vpcs)
```

fancy

```console
stackid=$(cat test.log|jq '.Stacks[0].StackId')
```

## Mix Shell Variables And Text In Command Line

```console
aws s3 cp testfile.txt ${BUCKET}base/{FILE}
```

## Set Variable On Command Line And Use In Command

```console
PROJECT_DIR="$(basename "$PWD")"; echo "$PROJECT_DIR"
```

## See All Environment Variables

```console
declare -p
```
