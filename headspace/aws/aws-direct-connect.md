# AWS DIRECT CONNECT (DX)

## Resources

- [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

## Features

- traffic does not go over the public internet
- uses dedicated, private network connections between intranet and Amazon VPC
- increased bandwidth / reliability
- bypasses ISP

## Limitations

- more expensive than VPN
- not redundant, need another failover DX or VPN
- data is NOT encrypted

## Use Case

- reduce costs when using large volumes of traffic
- do not want internal traffic traversing the internet

## Setup Steps

- get a dedicated line from a Tel Co to an AWS Direct Connect facility
- dedicated line is terminated in private rack / cage at AWS Direct Connect
  Facility
- AWS Dark fibre used from private rack / cage straight to AWS Data Center

## AWS to On-Premise Connections

- enable Route Propogation on Virtual Private Gateway (VPG)
- edit VPC subnet route table and add route back to on-premise data center
