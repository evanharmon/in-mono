# LINUX READ

## Resources

- [Guide](https://www.cyberciti.biz/faq/unix-howto-read-line-by-line-from-file/)

## Features
read data from a file, device, or terminal

## Flags
- `-r` enable raw mode. Allows reading binary data
- `-n` specify number of bytes to read from input. Default is 1

## Limitations
- not using `-r` flag will mangle backslashes

## Commands

### Read from input
default is to store single line in `$REPLY`

```bash
read
> My name is evan
echo $REPLY
```

### Read from input and set variable
`read -r -p "VMs are running. Delete and rebuild them (y/n)? " ans`

### Read File Line By Line

```bash
#!/bin/bash
input="tdm.builders.kicks.txt"
while IFS= read -r var
do
  echo "$var"
done < "$input"
```

### Read File By Field And Line

```bash
#!/bin/bash
file="/etc/passwd"
while IFS=: read -r f1 f2 f3 f4 f5 f6 f7
do
        # display fields using f1, f2,..,f7
        printf 'Username: %s, Shell: %s, Home Dir: %s\n' "$f1" "$f7" "$f6"
done < "$file"
```

### Use Read To Get Home Directory

```bash
IFS=: read -r _ _ _ _ _ homedir _ < <(getent passwd "$username")
```
