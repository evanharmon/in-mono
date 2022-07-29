# AWS VPC GATEWAY ENDPOINTS

general notes - see other specific headspace docs per service

## Resources

- [AWS VPC Gateway Endpoints Docs](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html)
- [AWS VPC Gateway Endpoints Configure Interface Endpoint](https://docs.aws.amazon.com/vpc/latest/privatelink/interface-endpoints.html)
- [AWS VPC Gateway Endpoints Enable private DNS Name](https://docs.aws.amazon.com/vpc/latest/privatelink/interface-endpoints.html#enable-private-dns-names)

## Features

- no additional charge
- does not auto enable AWS PrivateLink
- default vpc endpoint DNS is publicly accessible
- interfaces can be used thru DX or Site-to-Site VPN

## Limitations

- when using Amazon DNS Server, must enable both DNS hostnames and DNS resolution
- per region, cross-region requests not supported
- only support IPv4 traffic

## Routing

on creation, choose VPC route tables for subnets and routes will be auto created.
Otherwise add routes manually to route tables

instances in the subnets with route tables with gateway endpoint_id records
automatically route thru endpoint

## Private DNS

requires `Enable DNS hostnames` and `Enable DNS Support` both set to `true`

to keep the vpc endpoint from resolving to the public DNS, enable private DNS for
the endpoint

this way your app can just use `athena.us-east-1.amazonaws.com` and it will stay private
