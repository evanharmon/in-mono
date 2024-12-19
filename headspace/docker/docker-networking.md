# DOCKER NETWORKING

## Types
- none
- host
- bridge

## None
- container can't reach outside world
- no networking to host

## Host
- shares host networking
- exposing port will eat up the port

## Bridge
created on installation of docker.
Link is called `bridge` but on host it's `docker0`

basically docker is doing `ip link add docker0 type bridge`

view: `docker network ls` / `ip link` on host

how docker does nat gateways to containers

```sh
iptables \
  -t nat \
  -A DOCKER \
  -j DNAT \
  --dport 8080 \
  --to-destination 172.17.0.3:80
```

## Commands

### Run a container with networking none

`docker run --network none nginx`

### Run a container with host networking

`docker run --network host nginx`