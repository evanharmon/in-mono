# NGINX

## Features
n-g-i-n-x

## Limitations
- remember on a local OS, running on port 443 will require sudo

## Commands
stop, quit, reload, or reopen
`nginx -s {command}`

### Start
`sudo nginx`

### Test config
`sudo nginx -T`

### Restart
`sudo nginx -t && sudo nginx -s reload`

### Show nginx and config
`nginx -V`

## Configuration

### Mac Location
```bash
# Maybe non-brew?
/usr/local/etc/nginx
# Brew
/opt/homebrew/etc/nginx
# additional conf files with brew
/opt/homebrew/etc/nginx/servers/local.mydomain.dev.conf
# www dir
/opt/homebrew/var/www
```

### Linux Location
`/etc/nginx`

### Permissions issues
Mac - not sure how secure this is
`sudo chmod -R 777 /usr/local/var/run`

## Redirect HTTPS to HTTP
Edit nginx.conf
```conf
upstream localhost {
  server localhost:3000;
}
```

```conf
server {
  listen       localhost:8081 ssl;
  server_name  localhost;

  access_log  /usr/local/var/log/nginx/sslredirect.access.log;
  error_log  /usr/local/var/log/nginx/sslredirect.error.log;

  ssl_certificate      /etc/nginx/ssl/my-server.crt.pem;
  ssl_certificate_key  /etc/nginx/ssl/my-server.key.pem;

  ssl_session_cache    shared:SSL:1m;
  ssl_session_timeout  5m;

  ssl_ciphers  HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers  on;

  location / {
    proxy_read_timeout 150;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host:$server_port;
    proxy_set_header X-NginX-Proxy true;

    proxy_http_version 1.1;
    proxy_pass http://localhost/;
    #proxy_redirect http://localhost/ /;
    #proxy_redirect off;
  }
}
```

## Create Servers folder and server config
```conf
upstream localhost {
  server localhost:3000;
}
```

```conf
server {
  listen       localhost:8081 ssl;
  server_name  localhost;

  access_log  /usr/local/var/log/nginx/sslredirect.access.log;
  error_log  /usr/local/var/log/nginx/sslredirect.error.log;

  ssl_certificate      /etc/nginx/ssl/my-server.crt.pem;
  ssl_certificate_key  /etc/nginx/ssl/my-server.key.pem;

  ssl_session_cache    shared:SSL:1m;
  ssl_session_timeout  5m;

  ssl_ciphers  HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers  on;

  location / {
    proxy_read_timeout 150;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host:$server_port;
    proxy_set_header X-NginX-Proxy true;

    proxy_http_version 1.1;
    proxy_pass http://localhost/;
    #proxy_redirect http://localhost/ /;
    #proxy_redirect off;
  }
}
```

## Certs

### Create / Place SSL Certs
`/etc/nginx/ssl/my-server.crt.pem`
`/etc/nginx/ssl/my-server.key.pem`
