# UNIX LINUX SHELLS

## Interpreters

Always declare an interpeter at top of shell scripts!

```sh
#!/usr/bin/env bash
```

## `sh` Command

`sh` command overrides script interpreter set in a file!
call the script directly to use the declared interpreter

```sh
./my-script.sh
```

## Change Shell Preference

```console
# ZSH
chsh -s /bin/zsh
# or bash
chsh -s /bin/bash
# or bourne
chsh -s /bin/sh
# or fish
chsh -s /bin/fish
```

## Get Date For Start Of Filename

```console
date +%Y%m%d%H%M%S
```

outputs 20150104085700 style format

## Create New File With Timestamp

```console
touch date +%Y%m%d%H%M%S`-add-fields-idptable.js`
```

## Inheritance

env variables inherited by child processes
shell variables not inherited

## Script Date in New Date().toJSON() Format

```console
date -u +"%FT%T.000Z"
```

## Show History File By Env Var

```console
echo $HISTFILE
```

## Echo Without A Newline Added

```console
printf $FILE_SYSTEM_ID
```

## Base64 Decode From STD IN

```console
echo QWxhZGRpbjpvcGVuIHNlc2FtZQ | base64 -D
```

## Check If Script Eval Commands Are Available

Like `nvm` or `pyenv`

```console
command -v nvm
```

## Get Base Name Of A File From Full Path

```console
basename /home/user/file.sh
```

## Get Name Of Current Folder

```console
basename "$PWD"
```

## Convert Decimal To Hex

```sh
printf "%X\n" 1675637
```

## Avoid Duplicating \$PATH Entries Between Bash & Zsh

```console
if [[ ":$PATH:" != *":/usr/local/go/bin:$GOPATH/bin:"* ]]; then
    export PATH=/usr/local/go/bin:$GOPATH/bin:$PATH
fi
```

## Check What Shell Is Being Used

check current shell

```sh
echo $0
# or
echo $SHELL
```

or for /bin/dash on debian, etc

`readlink -f $(which sh)`