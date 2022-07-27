# AWS VPC DNS

## Resources

- [AWS VPC DNS Attributes](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html)
- [AWS VPC DNS Hostname and DNS Support](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support)

## Amazon VPC DNS Server

resides at `169.254.169.253`
Always Located Plus Two of VPC
Example 1: VPC 10.1.111.0/24 will have DNS server at 10.1.111.2
Example 2: VPC 10.0.0.0/16 DNS server at 10.0.0.2

## EnableDnsHostnames and EnableDnsSupport

When both set to true:

- instances with a public IP address receive corresponding public DNS hostnames
- Amazon-provided DNS server can resolve Amazon-provided private DNS hostnames
