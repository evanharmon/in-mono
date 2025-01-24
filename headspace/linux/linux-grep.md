# GREP

## Features
- `-i` ignores case
- `-w` search for exact word
- `-r` recursive searching in to directories
- `-o` only output matching
- `-A<int>` print x lines after
- `-B<int>` print x lines before
- use `-E` for extended regex, `egrep` is deprecated

## Limitations
- exact word search only matches punctuation as part of word
- basic regex and `? + { | ( )` lose their meaning, have to escape

## Ignore case sentivity
`netstat -npl | grep -i scheduler`

## Search for String in Files in Directory
searches recursively
`grep -r 'user' ./lib`

## Show only filenames containing pattern
`grep -r -l 'egrep'`

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

## Search and show X lines after
`grep -A1 Arsenal premier-league-table.txt`

## Regex Examples

### Match lines that don't start with comments
`grep -v '^#' /etc/login.defs`

### Match lines that end with 7
`grep '7$' /etc/login.defs`

### Match numbers that begin with a 2
`grep -E -w '^2[0-9]*' myfile`

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

### Match at least three zeros
`grep -E -r '0{3,}' /etc/`

### Match zero or one time
makes previous element optional
matches `disable`, `disabled`, AND `disables`
`grep -E -r 'disabled?' /etc/`

to match just `disable`, `disabled`, use exact word match
`grep -E -wr 'disabled?' /etc/`

### Match one thing or the other
`grep -E -r 'enable|disable' /etc/`

### Match Uppercase words with three total letters
other letters are lowercase so this is effectively titlecase
`[A-Z]` matches a single capital letter
`[a-z]{2,2}` matches exactly two lowercase letters
`sudo grep -E --color -w '[A-Z][a-z]{2,2}' /etc/nsswitch.conf`