# LINUX NETCAT (NC)

## Resource

- [Linux nc netcat with examples](https://linuxize.com/post/netcat-nc-command-with-examples/)

## Check for port

```console
nc -vvv 10.10.8.8 22
```

## Check if tcp port is listening with bash

```bash
bash -c "nc localhost 3306 && echo 'Listening' || echo 'Not Listening'"
```