# LINUX CRONTAB

## Resources
- [Crontab guru](https://crontab.guru/)

## Features
install, deinstall, and list the tables behind cron
- can also use named-interval directories and place scripts in there

## Flags
- `-e` to edit current user crontab

## Best practices
- leave off extension of script when used in a cronjob

## Directories

### Intervals
place scripts in the below directories to run at specified intervals by the dirname
runs as root

- `/etc/cron.daily`
- `/etc/cron.weekly`
- `/etc/cron.monthly`

```bash
# add script to run hourly
echo '$(date)' > myscript
sudo cp myscript /etc/cron.hourly
sudo chmod +rx /etc/cron.hourly/myscript

# remove script
sudo rm /etc/cron.hourly/myscript
```

## Commands

### Create cronjob from terminal
- appends cronjob to user crontab
- handles situation where crontab doesn't exist yet

`(crontab -l; echo "<command>" ) | crontab -`

### List cronjobs
```bash
# current user
crontab -l
# system
sudo crontab -l
```

### Edit cron tab

depending on user
```bash
# current user
crontab -e
# root
sudo crontab -e
# diff user
sudo crontab -e -u other_user
```

```bash
crontab -e
> # example - every sunday at 3am
> 0 3 * * 0 /usr/bin/touch test_file
> # example - on the hour
> 0 * * * * /usr/bin/touch test_file
```

### Delete crontab
```bash
# current user
crontab -r
# other user
sudo crontab -r -u other_user
```