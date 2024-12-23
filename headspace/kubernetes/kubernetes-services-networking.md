# KUBERNETES SERVICES NETWORKING

## Common solutions

- kube-proxy

## Features

- ip forwarding address/port rules are created on each node

## ClusterIP

meant just for communication within the cluster

## Set services ip range

set on kube-api-server with the flag `--service-cluster-ip-range`
default is `10.0.0.0/24`
