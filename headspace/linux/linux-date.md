# DATE UNIX

## Summary

Notes on working with unix timestamps / dates

## Resources

- [Linux Date Formats](https://www.thegeekstuff.com/2013/05/date-command-examples/)

## Recipes

### Convert Unix To String Date Format
`date -r 1558099332`

### MM-DD-YYYY Save File
`$(date +%F).csv`

### YYYY-MM-DD_HH-MM-SS file naming
`file_name="backup_data_$(date '+%Y-%m-%d_%H-%M-%S')"`

### ISO 8601 Date Format

`date '+%Y-%m-%d'`

### UTC Timestamp

```zsh
date +%FT%T
```

### UTC Timestamp + ms

example output: `2018-01-24T04:06:51.178Z`

`date --utc +%FT%T.%3NZ`
