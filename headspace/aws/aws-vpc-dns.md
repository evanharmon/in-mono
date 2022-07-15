# AWS VPC DNS

## Resources

- [AWS VPC DNS Attributes](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html)
- [AWS VPC DNS Hostname and DNS Support](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support)

## Amazon VPC DNS Server

Always Located Plus Two
VPC 10.1.111.0/24 will have DNS server at 10.1.111.2

## EnableDnsHostnames and EnableDnsSupport

When both set to true:

- instances with a public IP address receive corresponding public DNS hostnames
- Amazon-provided DNS server can resolve Amazon-provided private DNS hostnames
