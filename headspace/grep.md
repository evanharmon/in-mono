# GREP

## Features
- `-i` ignores case
- `-w` search for exact word
- `-r` recursive searching in to directories
- `-o` only output matching
- use `-E` for extended regex or use `egrep`

## Limitations
- exact word search only matches punctuation as part of word
- basic regex and `? + { | ( )` lose their meaning, have to escape

## Ignore case sentivity
`netstat -npl | grep -i scheduler`

## Search for String in Files in Directory
searches recursively
`grep -r 'user' ./lib`

## Search string in File show only filename

`grep -rl 'uib-typeahead' ./app`

## Search for Filename in Directory

`use find not grep`

## Show Line Numbers

`grep -n`

## Search for String but Exclude a Directory

`grep -R --exclude-dir=node_modules 'some pattern' /path/to/search`

## Find Matching Strings Between Files

example format of txt files

```txt
1234,
1235
```

`grep -f file1.txt file2.txt | tee matches.txt`

## Search with sudo and have colors
`sudo grep -ri --color 'password' /etc/`

## Search for lines that DO NOT contain the string
`grep -vi 'password' /etc/ssh/sshd_config`

## Search for exact word
note this wouldn't match `passwordAuthentication` because that's a different word.
`grep -wi 'password' /etc/ssh/sshd_config`

## Search for word and only shw matching output
`grep -oi 'password' /etc/ssh/sshd_config`

## Regex Examples

### Match lines that don't start with comments
`grep -v '^#' /etc/login.defs`

### Match lines that end with 7
`grep '7$' /etc/login.defs`

### Match numbers that begin with a 2
`egrep -w '^2[0-9]*' myfile`

### Match any ONE character
matches `cat`, `cut`, `execute`, etc
`grep -r 'c.t' /etc/`

### Match lines zero or more times
match lines that start with `/`, have 0 or more chars, and end with `/`
`grep -r '/.*/' /etc/`

### Match one or more
have to escape since grep uses basic regex
`grep -r '0\+' /etc/`
but better to just use `-E` for extended regex
`grep -Er '0+' /etc/`
or just use egrep `egrep -r '0+' /etc/`

### Match at least three zeros
`egrep -r '0{3,}' /etc/`

### Match zero or one time
makes previous element optional
matches `disable`, `disabled`, AND `disables`
`egrep -r 'disabled?' /etc/`

to match just `disable`, `disabled`, use exact word match
`egrep -wr 'disabled?' /etc/`

### Match one thing or the other
`egrep -r 'enable|disable' /etc/`

### Match Uppercase words with three total letters
other letters are lowercase so this is effectively titlecase
`[A-Z]` matches a single capital letter
`[a-z]{2,2}` matches exactly two lowercase letters
`sudo egrep --color -w '[A-Z][a-z]{2,2}' /etc/nsswitch.conf`