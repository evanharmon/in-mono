# AWS CLOUDFRONT CACHING HEADERS

## Resources

- [AWS CloudFront Header Caching](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html)

## Defaults

by default, CloudFront does NOT consider headers when caching objects in edge locations
This means by default, a file from S3 with different headers but same file has only one version cache'd

## Header Cache Configuration

three possible settings:

- forward all headers to origin
- foward list of specified headers
- forward only the default headers

## Forward All Headers

with this setting, CloudFront doesn't cache objects associated with this cache
behavior. Every request is sent to the origin

## Forward List of Specified Headers

objects are cached based on the values in all of the specified headers

## Forward only Default Headers

CloudFront does not cache objects based on the values in the request headers