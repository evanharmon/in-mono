# LINUX ANACRONTAB

## Format
`cat /etc/anacrontab`

period delay job-identifier command
or
@period delay job-identifier command

```txt
SHELL=/bin/sh
HOME=/root
LOGNAME=root

# These replace cron's entries
1       5       cron.daily      run-parts --report /etc/cron.daily
7       10      cron.weekly     run-parts --report /etc/cron.weekly
@monthly        15      cron.monthly    run-parts --report /etc/cron.monthly
```

## Examples

Run script 3 hours after system startup
```bash
sudo vim /etc/anacrontab
> # once every 3 days, delay of 10 minutes, id of test-job
> 3 10 test-job /path/to/script
```

always verify syntax afterwards
`anacron -T`
