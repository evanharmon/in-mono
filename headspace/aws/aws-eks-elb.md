# AWS EKS ELB

## Features
- uses AWS tags to integrate ELBs with kubernetes

## Requirements

for internal ELB's, requires tag:
`"kubernetes.io/role/internal-lb" = "1"`

for external ELB's, requires tag:

`"kubernetes.io/role/lb" = "1"`
