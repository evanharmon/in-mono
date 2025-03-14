# LINUX CRON

## Resources
- [Cron best practices](https://sanctum.geek.nz/arabesque/cron-best-practices/)

## Features
run a process on a schedule
- can be run on a date, time, or frequency
- uses the `crond` service
- `*` means any value will match

## Best practices
- well suited for repetitive jobs that execute on specific interval
- always use fullpath to command / script

## Limitations
- if a job is missed, it won't run again until the next schedule match
- default `/etc/crontab` table can get reset / cleared on cron upgrade by apt

## Cron tables
- each user can have their own cron table
- root user manages system-wide cron table

## Cron Schedule Format
system-wide table:
`minute hour dayOfMonth month dayOfWeek user-name command`

user table:
`minute hour dayOfMonth month dayOfWeek user-name command`

view crontable - `cat /etc/crontab`
```txt
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
17 *    * * *   root    cd / && run-parts --report /etc/cron.hourly
```

### Examples Simple Schedules

```txt
# 08:10 AM    19th February
10 8 19 2 
# 08:10 AM    19th February as long as on a Monday
10 8 19 2 1
# 08:10 AM    19th Every Month Any Day
10 8 19 * *
# 08:10 AM    Every Day Every Month Any Day
10 8 * * *
# 12:00 AM    Every Day Every Month Any Day
0 0 * * * 
# 9:00PM      Every Day Every Month Any Day
00 21 * * *
# 10th minute Every Hour Every day Every Month Any Day
10 * * * *
# Every Minute Every Hour Every Day Every Month Any Day
* * * * *
# Run a job at 10 PM on the 1st of every month
0 22 1 * * /path/to/monthly_job
# 9:00AM      Only weekdays
0 9 * * 1-5
# Run at min 15 and 45
15,45 * * *
# Run at 2,3, 4AM
0 2-4 * * *
```

## Start cron service
`sudo service cron start`

## Get status of cron service
`sudo service cron status`

### Example step value schedules
minute hour dayOfMonth month dayOfWeek user-name command
```txt
# Every 2 Minute of Every Hour Every Day Every Month Any weekday
*/2 * * * *
# Every 4 Hours
0 */4 * * *
# 0am, 4am, 8am
0 0-8/4 * * *
```

## Crontab
Don't use `sudo` or job will schedule for root user

### Create cronjob in editor
```bash
# Open crontab editor as current user
cron -e
# Example line to run cron at 9pm every day
0 21 * * *      uptime >> /tmp/system-report.txt
```

## Check logs for cron run
```bash
tail /var/log/syslog
# Look for lines like `CRON[1720]` with the command
```
