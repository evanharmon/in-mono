# LINUX ANACRON

## Features
job scheduler
- for systems not always connected to internet
- for irregular boot cyles
- schedules tasks based on time since last run
- will re-try jobs on startup for the day that didn't run

## Limitations
- smallest scheduling unit is 1 day (once per day)
- often not installed by default
- doesn't remove timestamp files - have to do this yourself

## Best practices
- good for jobs that should be run even if missed for that day
- doesn't matter when exactly in runs on a day, month, etc

## Logs
visible at `/var/log/cron`

## Install
`sudo apt install anacron`

## Commands

### Verify syntax of anacron table
use `-T` test option
`anacron -T`

### Re-run all jobs no matter when last executed
`sudo anacron -n -f`