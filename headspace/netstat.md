# NETSTAT

## Check what is running on a port

```console
netstat -vanp tcp | grep 3000
```

## Check what is listening on a port

```console
netstat -l 3000
```

## Check more stuff

```console
netstat -anp | grep 80
```
