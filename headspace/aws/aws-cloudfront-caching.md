# AWS CLOUDFRONT CACHING

## Resources

- [AWS CloudFront Optimizing caching](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html)
- [AWS CloudFront Cache Behavior Settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior)
- [AWS CloudFront Regional Edge Caches](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowCloudFrontWorks.html#CloudFrontRegionaledgecaches)

## Features

- supports TTL between 0 seconds and 1 year
- separate Cache at EACH edge location

## Regional Edge Cache

regional edge cache is skipped on the below and go directly to origin:

- Proxy HTTP methods (PUT / POST / PATCH / OPTIONS / DELETE)
- Dynamic requests, as determined at request time (forward all headers)
- S3 bucket origin when edge is in same region

## Cache Content Sources

- headers
- session cookies
- query string parameters

## Default Cache Behavior

- default cache behavior settings created on the distribution

## Default TTL

- default is 86400 seconds (1 day)
- applies when origin DOES NOT add HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, or `Expires` on objects
