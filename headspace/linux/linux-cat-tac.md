# LINUX CAT TAC

## Features
- outputs entire file

## View a file
who knew `tac` reversed the output?
`cat myfile.txt`
`tac myfile.txt`

## Add data to a file via redirect
```bash
cat > myfile.txt
<enter data here>
<ctrl+d> to exit out of prompt
```

# Append to end of file
```bash
$ cat <<EOT >> greetings.txt
line 1
line 2
EOT
```