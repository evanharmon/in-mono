# AWS LAMBDA NETWORKING

## Resources

- [AWS Blog Improved VPC Networking](https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/)

## Lambda Network Interfaces

- [Improved VPC Networking With Hyperplane ENIS](https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/)
  means Lambda VPC now re-uses network interfaces reducing the chance of running
  out of customer owned vpc ip / eni's.
  Hyperplane ENIs are tied to `security group:subnet` combination

```
Your function scaling is no longer directly tied to the number of network
interfaces and Hyperplane ENIs can scale to support large numbers of concurrent
function executions
```