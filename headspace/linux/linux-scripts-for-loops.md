# LINUX SCRIPTS FOR LOOPS

## Features
- not the best practice to use backticks `` to enclose a command substitution
- prefer `$()` for command substitution
- use `[@]` to iterate over named arrays

## For loops iteration

### Iterate over a variable
similar to programming languages format

```bash
for (( i=0; i<5; i++ )); do
  echo "Value of i: $i"
done
```

### Loop through named array

```bash
my_array=("apple" "banana" "cherry")

for fruit in "${my_array[@]}"; do
    echo "$fruit"
done
```

### Loop through a directory
```bash
for file in /path/to/directory/*; do
    echo "$file"
done
```
or
```bash
for file in $(ls); do
  echo "File has this many lines: $(cat $file | wc -l)"
done
```

### Loop through command output
```bash
for user in $(ls -l | grep "user1" | awk '{print $3}'); do
    echo "$user"
done
```

### loop over a set range of numbers
range is inclusive - so this would print 1,2,3,4,5

```bash
for i in {1..5}; do
    echo "Iteration $i"
done
```

### Iterate over names in a file
backticks `` captures output of the command as a string
otherwise, each word in the file would be interpreted as a command
note: backticks treat whitespace as characters and will be included in the resulting string

```bash
for entry in `cat myfile.txt`; do
  echo $entry
done
```

or the more robust:
`$()` uses word splitting and pathname expansion, so whitespace characters are separate words

```bash
for entry in $(cat myfile.txt); do
  echo $entry
done
```