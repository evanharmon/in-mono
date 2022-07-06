# AWS VPC GATEWAY ENDPOINTS
general notes - see other specific headspace docs per service


## Resources

- [AWS VPC Gateway Endpoints Docs](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html)

## Overview
- no additional charge
- does not auto enable AWS PrivateLink

## Limitations
- when using Amazon DNS Server, must enable both DNS hostnames and DNS resolution
- per region, cross-region requests not supported
- only support IPv4 traffic

## Routing
on creation, choose VPC route tables for subnets and routes will be auto created.
Otherwise add routes manually to route tables

instances in the subnets with route tables with gateway endpoint_id records
automatically route thru endpoint