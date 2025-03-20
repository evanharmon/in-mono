# HOMEBREW SERVICES

## Commands

### Start
`brew services start nginx`

### Restart
`brew services restart nginx`

### Stop
`brew services stop nginx`

### Check logs

have to manually check the location of logs..

nginx ex:
```bash
tail /opt/homebrew/var/log/nginx/access.log 
tail /opt/homebrew/var/log/nginx/error.log 
```

## Preferences

use the .plist files to add args to services

```
# /opt/homebrew/Cellar/mysql/5.7.14/homebrew.mxcl.mysql.plist
<array>
    <string>/usr/local/opt/mysql/bin/mysqld_safe</string>
    <string>--datadir=/usr/local/var/mysql</string>
    <string>--port=3307</string>
</array>
```

## Login items

### MacOS
starting services on startup will place them in the directory below.
delete the preference file to remove from login items

example where nginx was run on 443 using `sudo brew services start nginx`

`/Library/LaunchDaemons/homebrew.mxcl.nginx.plist`

## Common issues

### Running brew services with sudo
has the consequence of taking `root:admin` ownership of specific directories.
running with sudo can be necessary if you REALLY have to use port 443 though..

`sudo brew services start nginx`

cleanup if you ever brew upgrade / reinstall / uninstall for nginx
```
Warning: Taking root:admin ownership of some nginx paths:
  /opt/homebrew/Cellar/nginx/1.27.4/bin
  /opt/homebrew/Cellar/nginx/1.27.4/bin/nginx
  /opt/homebrew/opt/nginx
  /opt/homebrew/opt/nginx/bin
  /opt/homebrew/var/homebrew/linked/nginx
This will require manual removal of these paths using `sudo rm` on
brew upgrade/reinstall/uninstall.
Warning: nginx must be run as non-root to start at user login!
```