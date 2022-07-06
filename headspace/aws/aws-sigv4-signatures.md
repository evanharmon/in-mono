# AWS SIGV4 SIGNATURES

## Resources
- [AWS Signature Version 4 SigV4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html)
- [PYTHON Signature Example](https://docs.aws.amazon.com/general/latest/gr/sigv4-signed-request-examples.html)

## Helpful Node / Javascript Packages
- [mhart/aws4fetch](https://github.com/mhart/aws4fetch)
- [mhart/aws4](https://github.com/mhart/aws4)

## Debug Tips
- use `-debug` flag with AWS CLI and compare headers to custom code headers

## Golang
- make sure no print (or read) happens of request as this can mess up the content-length
and fail the signature