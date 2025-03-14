# LINUX STAT

## Resources

- [Linux stat GeekStuff](https://www.thegeekstuff.com/2009/07/unix-stat-command-how-to-identify-file-attributes/)

## Features
- shows octal format permissions as well

## Commands

### Display information about a file

```bash
stat myfile.txt
# macOS more verbose with labels:
stat -x myfile.txt
```

## Recipes

### Get file size in bytes

`alias fs="stat -f \"%z bytes\""`
