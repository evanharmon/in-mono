# AWS EKS DATAPLANE

## Features
Nodes running on the eks dataplane
- run in customer-managed account and VPC

## Connectivity
AWS provisions cross-account ENI's in customer account VPC subnets.
This provides connectivity from controlplane instances to nodes in customer account.
