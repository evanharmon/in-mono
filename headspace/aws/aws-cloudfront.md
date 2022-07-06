# AWS CLOUDFRONT
AWS Shield standard on by default
- like a CDN, serves to users based on their IP region
- supports an entire website: dynamic, static, streaming, interactive content

## Resources

- [AWS CloudFront Docs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [AWS CloudFront Logging](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/logging.html)
- [Namecheap, Route53, S3, Cloudfront Guide](https://benjamincongdon.me/blog/2017/06/13/How-to-Deploy-a-Secure-Static-Site-to-AWS-with-S3-and-CloudFront/)
- [Header Caching](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html)
- [Improve Edge Cache Hits](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cache-hit-ratio.html)
- [Secure Private Web Apps Behind CF](https://aws.amazon.com/blogs/networking-and-content-delivery/authorizationedge-using-cookies-protect-your-amazon-cloudfront-content-from-being-downloaded-by-unauthenticated-users/?nc1=b_rp)


## Logging
- S3 for non real-time
- real-time Kinesis data streams / fire hose

## Possible Origins

Supports non-AWS origin servers through Route 53
Distinguishes between multiple origins in the same distribution
Origin ID Must be Unique

- S3
- EC2
- ELB
- Route 53

## Edge Locations

- location where content will be cached, separate from AWS Region / AZ
- can write / PUT an object
- requests automatically routed to nearest edge location
- time to live (TTL) in seconds used to limit lifecyle

## Distribution

collection of Edge Locations

## Path Pattern

Uses RegEx

## Restricting Access

can use signed URLs or signed cookies

## Alternate CNAMES

example cdn.harmonsoftwaresolutions.com
If using Alternate CNAMES, you have to upload your own SSL certificate

## S3 Logging Bucket Settings

Encryption must be AES-256. KMS will prevent Cloudfront from writing any logs to the s3 bucket

## Unzip Logs

```console
gzip -d 11111111111111.2019-04-25-13.eeeeeeee.gz
```

## Debug CORS issues

- [AWS Advice](https://aws.amazon.com/premiumsupport/knowledge-center/no-access-control-allow-origin-error/)

Origin must allow OPTIONS requests and return `Access-Control-Allow-Origin` header.

```console
curl -H "origin: example.com" -v "https://www.anything.net/video/call/System.generateId.dwr"
```

In CloudFront `behaviors` tab, edit the behavior setting
`Cache Based on Selected Request Headers` to the value `Whitelist`

and whitelist the below headers

```
Access-Control-Request-Headers
Access-Control-Request-Method
Origin
```

## Error Pages on Single Page Apps

SPAs must have 404 index.html 200 response error settings set up in CloudFront
