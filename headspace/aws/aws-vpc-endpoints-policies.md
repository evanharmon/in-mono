# AWS VPC ENDPOINT POLICIES

iam resource policies for vpc endpoints

## Resources

- [AWS VPC Endpoint Policies](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html)

## Features

- default vpc endpoint policy is allow all
- applied at the vpc endpoint level
- can be used to limit vpc endpoint access to specific services, such as a single s3 bucket

## Limitations

- do not override IAM policies
- policy MUST contain a principal
- not all endpoint services support endpoint policies
- `aws:sourceVPC` only works for VPC endpoints
- `aws:sourceIP` condition only works for public IPs

## Considerations

- still helpful to adjust resources iam policy to limit traffic to just the vpc endpoint
