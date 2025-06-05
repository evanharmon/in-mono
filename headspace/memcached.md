# MEMCACHED

## Features
in-memory cache

## Limitations
- no way to check expiry, all you can check is for a cache miss

## Install cli tools
```sh
# on a docker debug container
dctl install libmemcached
# apt
apt install libmemcached-dev
# May install as memdump or memcdump
```

## Memdump / Memcdump
dump the cache - note this can be taxing so be careful on a prod machine


### Dump keys
```sh
# must include servers
memdump --servers=localhost
```

## Memflush / Memcflush

### Delete all keys
```sh
memflush --servers=localhost
```
