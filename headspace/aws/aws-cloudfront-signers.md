# AWS CLOUDFRONT SIGNERS

used with CloudFront signed URLs and signed cookies

## Resources

- [AWS CloudFront Signers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html)

## Trusted Key Group

AWS recommends using trusted key group instead of a CloudFront key pair

## Create Key Pair

`openssl genrsa -out private_key.pem 2048`
`openssl rsa -pubout -in private_key.pem -out public_key.pem`

## Upload Public Key

upload public key to CloudFront and record the public key id
(hopefully somewhere like parameter store / secrets manager?)

## Add Public Key to Key Group

create the key group in CloudFront if necessary
choose previously added public key
record the key group name
(hopefully somewhere like parameter store / secrets manager?)

## Add Signer to distribution

Signers are a cache behavior
add to behaviors tab