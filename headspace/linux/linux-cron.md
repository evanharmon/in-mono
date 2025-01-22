# LINUX CRON

## Resources
- [Cron best practices](https://sanctum.geek.nz/arabesque/cron-best-practices/)

## Features
run a process on a schedule
- can be run on a date, time, or frequency
- uses the `crond` service
- `*` means any value will match

## Cron Schedule Format
minute hour day month weekday

### Examples Simple Schedules
minute hour day month weekday
```txt
# 08:10 AM    19th February
10 8 19 2 
# 08:10 AM    19th February as long as on a Monday
10 8 19 2 1
# 08:10 AM    19th Every Month Any Weekday
10 8 19 * *
# 08:10 AM    Every Day Every Month Any Weekday
10 8 * * *
# 9PM Every Day Every Month Any Weekday
00 21 * * *
# 10th minute Every hour Every day Every Month Any Weekday
10 * * * *
# Every Minute Every Hour Every Day Every Month Any Weekday
* * * * *
```

### Example step value schedules
minute hour day month weekday
```txt
# Every 2 Minute of Every Hour Every Day Every Month Any weekday
*/2 * * * *
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

### List cronjobs
`crontab -l`

### Check logs for cron run
```bash
tail /var/log/syslog
# Look for lines like `CRON[1720]` with the command
```