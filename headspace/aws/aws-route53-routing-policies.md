# AWS ROUTE 53 ROUTING POLICIES

## Resources

- [AWS Route 53 Routing Policies](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)

## Features

- decision tree can be created from combination weighted records

## Simple (DEFAULT)

- no intelligence built in
- used for a single resource
- does not support Health Check
- supports private hosted zone

## Latency-based

use case: resources in multiple AWS regions. Route53 will choose the lowest latency resource record set

- used by creating latency resource record set for the ELB in each region
- supports private hosted zone
- supports Health Check

## Failover

use case: active/passive setup
Ex. Primary site in us-west-1 and secondary site in us-east-1

- always sends to primary unless primary fails
- supports private hosted zone
- supports Health Check

## Geoproximity

use case: route traffic based on location of users and resources

- requires Route53 Traffic Flow
- can shift traffic from resources in one location to another based on bias
- bias values: 1 to 99 to expand, -1 to -99 to shrink
- supports non-AWS resources but have to specify latitude / longitude

## Multi-value

responds to DNS queries with up to 8 healthy records
not a substitute for a load balancer

- selects a record at random
- supports private hosted zone
- supports health checks
