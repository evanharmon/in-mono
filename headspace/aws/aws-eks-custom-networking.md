# AWS EKS CUSTOM NETWORKING

## Features
also known as secondary cidrs
- can create additional network outside VPC cidr range
- useful when primary CIDR on VPC becomes insufficient
- secondary CIDR range can be used for pods
- nodes can use primary cidr range

## Use cases
- IP address exhaustion
- network isolation
- integration with other networks

## Alternatives
IPv6 makes a lot of this unnecessary if trying to avoid IP address exhaustion

## Requirements
VPC-CNI or other CNI would have to be told to use the secondary CIDR for pods
