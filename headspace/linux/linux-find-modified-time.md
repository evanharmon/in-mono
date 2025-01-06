# FIND MODIFIED TIME

## Features
modified will also show created files/folders
- `-mtime` is for 24 hour periods
- `-mmin` is for minutes
- `--min` is not inclusive
- `+` prefix is for more than x, skips current time
- `-` prefix for less than x

## Commands

### Find by modified time
`find -mtime 1`

### Find by modified minutes
at 12:05pm, the below would show files changed from 12:01 to 12:05
non-inclusive
would not show files changed at 12:00pm
`find -mmin 5`

## Examples

### Modified in last 24 hours
`find -mtime 1`

### Between 24 and 48 hours ago
`find -mtime 2`

### Exactly 5 minutes ago
non-inclusive, so only 5,4,3,2,1 min ago
references current time
`find -mmin 5`

### Within last 5 minutes
`find -min -5`

### MORE than 5 minutes ago
let's say file was modified at 11:00, below command would show it
aka 11:05 would show files modified at 11:00 or earlier
looks at current time
11:05,04,03,02,01 - 5 values. 11:00 is more than last time value checked
`find -mmin +5`
