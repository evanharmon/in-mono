# AWS EKS ADDON EXTERNAL DNS

## Resources
- [External DNS aws tutorial](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md)
- [EKS blueprints quick start external dns](https://aws-quickstart.github.io/cdk-eks-blueprints/addons/external-dns/)

## Features
integrates aws LB's with route53
- creates necessary route53 records
- assigns 
- configure IAM policies and service accounts for Route53 integration
- uses annotations on the service

## Route53 Delegated subdomains
the quick start guide has a good walkthrough of:
- network account has domain
- network account has IAM role `DomainOperator` to manage Route53
- network account IAM role has trust relationship with child account

then the child account IAM role can add subdomains
