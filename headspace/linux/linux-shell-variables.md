# UNIX LINUX SHELL VARIABLES

## Check what shell is being used

```sh
echo $0
```

## Reference current working directory

Current working directory is an OS level concept

`echo ${CWD}`

## Reference present working directory

`echo ${PWD}`

## Assign variable

`a=879`

## Assign path to variable

`Vf=./Container-Files/Vim-7.4.Tar.Bz2`

## Assign command to a variable

`a=ls -la`

## Remove an env variable

`unset NODE_ENV`

## View shell variables

`set | less`

## View env variables

`env`
or
`printenv`

## Export env variable to shell (case sensitive)

`export NVIM_TUI_ENABLE_TRUE_COLORS=1`

## Single env variable for command

`CID=$(docker ps -lq)`

## Use env variable in command line

`docker stats $CID`

## Command substitution

Pipe output to a variable

`var4=$(aws ec2 describe-vpcs)`

fancy

`stackid=$(cat test.log|jq '.Stacks[0].StackId')`

## Mix shell variables and text in command line

`aws s3 cp testfile.txt ${BUCKET}base/{FILE}`

## Set variable on command line and use in command

`PROJECT_DIR="$(basename "$PWD")"; echo "$PROJECT_DIR"`

## See unexported environment variables
`-p` isn't always necessary but shows prefix

```bash
declare -p
# includes all variables so easier if you grep
declare | grep 'workers'
```
