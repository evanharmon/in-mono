# AWS CLOUDFRONT

## Resources

- [AWS CloudFront Docs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [Namecheap, Route53, S3, Cloudfront Guide](https://benjamincongdon.me/blog/2017/06/13/How-to-Deploy-a-Secure-Static-Site-to-AWS-with-S3-and-CloudFront/)
- [Improve Edge Cache Hits](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cache-hit-ratio.html)


## Edge Locations

- location where content will be cached, separate from AWS Region / AZ
- can write / PUT an object
- requests automatically routed to nearest edge location
- time to live (TTL) in seconds used to limit lifecyle

## Distribution

collection of Edge Locations

## Error Pages on Single Page Apps

SPAs must have 404 index.html 200 response error settings set up in CloudFront
