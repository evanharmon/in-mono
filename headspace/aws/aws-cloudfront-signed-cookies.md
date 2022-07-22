# AWS CLOUDFRONT SIGNED COOKIES

## Resources

- [AWS CloudFront Signed URLs and Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html)
- [AWS CloudFront Choose Between Signed URLs and Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html)
- [AWS CloudFront Using Signed Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html)

## Features

- restricted access to multiple files (path)
- ip filter
- path filter
- date / expiration filter

## Limitations

- existing URL cannot contain these query params: `Expires`, `Policy`, `Signature`, `Key-Pair-Id`
