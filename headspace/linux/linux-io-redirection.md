# LINUX IO REDIRECTION

## Features
- `>` overwrites
- `>>` appends

## Redirect STDOUT
overwrite: `echo $SHELL > shell.txt`
or append: `echo $SHELL >> shell.txt`

## Redirect STDERR
overwrite: `cat missing_file 2> error.txt`
or append: `cat missing_file 2>> error.txt`

## Redirect STDOUT to bit bucket
silences output
`redis-server > /dev/null`

## Redirect STDERR to bit bucket
silences output
redirect and dump what you don't need
`cat missing_file 2> /dev/null`

## Redirect STDERR to STDOUT
`2>&1`

## Silence stderr and stdout
`redis-server > /dev/null 2>&1`
