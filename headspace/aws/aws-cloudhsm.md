# AWS CLOUDHSM

## Resources

- [AWS CloudHSM Docs](https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html)
- [AWS Blog Portable root CA for CloudHSM](https://aws.amazon.com/blogs/security/create-a-portable-root-ca-using-aws-cloudhsm-and-acm-private-ca/)

## Features

-

## Limitations

- CANNOT be used with ACM public certs

## Caveat

a major feature of CloudHSM is AWS DOES NOT have access to your keys.
This is why it wouldn't make sense to use with ACM public certs
