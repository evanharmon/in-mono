# LINUX IO REDIRECTION

## Features
- `>` overwrites, can also automatically create a file
- `>>` appends
- `1>` or `>` is stdout
- `2>` is stderr
- `&` is used to send a specific std io to a diff std io
- `&1` redirect and send output to stdout
- `&2` redirect and send output to stderr

## Echo an error message
Redirect stdout to stderr
`echo "Error $DENOMINATOR of 0 is not allowed" >&2`

## Clear contents of file
`> myfile.txt`

## Append contents of file to another file
`cat myfile1.txt >> myfile2.txt`

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
stderr gets sent to stdout
`2>&1`

## Silence stderr and stdout
```bash
redis-server > /dev/null 2>&1
# or more explicitly
redis-server > /dev/null 2> /dev/null
```

## Redirect stderr and stdout to separate files
`redis-server >> output.txt 2>> errors.txt`

## Redirect both stderr and stdout to single file
Has to be at end, otherwise stderr gets
sent to terminal since not redirected yet.

`redis-server > output_err.txt 2>&1`

## Redirect output to command
helpful when a program doesn't accept stdinput well from pipes, etc
Helpful for scripts as well which may have lots of prompts
```bash
mycmd exampleinput < file-with-data.txt
# another example: bc prompts for a lot of input
bc <<<1+2+3+4
```