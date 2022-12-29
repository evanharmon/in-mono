# LINUX STAT

## Resources

- [Linux stat GeekStuff](https://www.thegeekstuff.com/2009/07/unix-stat-command-how-to-identify-file-attributes/)

## Display Information About A File

```console
stat -x myfile.txt
```

## Get file size in bytes

```console
alias fs="stat -f \"%z bytes\""
```
