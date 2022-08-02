# AWS CLOUDFRONT ORIGINS APPLICATION LOAD BALANCER

## Resources

- [AWS CloudFront Origins Restrict access to Application Load Balancer](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/restrict-access-to-load-balancer.html)
- [Blog Configuring CloudFront with ALB correctly](https://aws.plainenglish.io/configuring-aws-alb-with-cloudfront-you-are-probably-doing-it-wrong-4f0cbf86030d)

## Limitations

- ALB must be publicly accessible from edge location

## Steps

- configure CloudFront to add custom HTTP header with secret value to requests
- configure ALB to only forward requests with above header
- require both to use HTTPs

## ALB Security Group

additional security step would be to adjust the ALB security group to only
allow the CloudFront IPs

prefix group can be used to avoid brittleness to static ip list
`com.amazonaws.global.cloudfront.origin-facing`

## Headers

CloudFront hostname like `myapp.example.com` will NOT match the hostname on the
ALB such as `origin.myapp.example.com`

DO NOT forward the header from CloudFront explicitly, let CloudFront
default behavior add a host Header with the origin value

## SSL Certs

don't use the same SSL cert on CloudFront with an ALB origin using the same SSL cert
Not worth the headache of host header rewrites as the ALB Hostname will NOT match
the SSL cert

- remember that when an ALB is in use, CloudFront origin must match ALB
  hostname and SSL Cert
