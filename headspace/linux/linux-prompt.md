# LINUX PROMPT

## Flags
- `\d` date in Weekday Month Date format
- `\e` ASCII escape char 033
- `\h` hostname
- `\H` complete hostname
- `\n` newline
- `\r` carriage return
- `\s` name of shell
- `\t` current time in 24 hour HH:MM:SS
- `\T` current time in 12 hour HH:MM:SS
- `\@` current time in 12 hour am/pm
- `\A` current time in 24 hour HH:MM
- `\u` current username
- `\w` current working directory
- `\W` basename of current working directory
- `\$` `#` when UID is 0, otherwise `$`

## Check current prompt format
`echo $PS1`
outputs:
`[\W]$`
`\W` is present working directory
`$` is prompt symbol

## Change prompt format
example: Date Time User Hostname Current_Working_Dir

```bash
PS1='[\d]\u@\h:\W$'
# results in prompt
[Sun Jan 19]evan@macbook:~$
```
