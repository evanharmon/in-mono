# AWS CLOUDFRONT EDGE

## Resources

- [AWS CloudFront Edge Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions.html)
- [AWS CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html)
- [AWS CloudFront Lambda@Edge](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html)

## CloudFront Functions

lightweight for high-scale, latency-sensitive CDN customization

use cases:

- cache key normalization to create optimal cache key
- header manipulation
- URL redirects or rewrites
- request authorization

features:

- only supports javascript
- only supports viewer request / response
- no network access
- no access to request body
- no packages / libs

max memory: 2 MB
max function code size: 10 KB

## Lambda@Edge

longer execution time with network calls and third party libs
also works for doing a serverless dynamic API where lambda@edge talks to
DynamodB for example

use cases:

- inspect cookies and rewrite URLs for A / B testing
- return different objects based on User-Agent or Referer header
- adjust response based on cookie
- generate HTTP responses for viewer request / origin request events
- inspect headers or authorization tokens and insert header to control access to content
- make network calls to external resources to customize response

features:

- supports Node.js or Python
- supports viewer request / response
- supports origin request / response
- network access

Lambda is publisehd to a region and then associated with a CloudFront Distribution
which replicates it to edge locations

max memory: 128 - 3,008 MB
max function code size: 1 MB (viewer) and 50 MB (origin)
