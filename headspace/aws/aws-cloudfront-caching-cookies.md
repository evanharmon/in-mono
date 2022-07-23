# AWS CLOUDFRONT CACHING COOKIES

## Resources

- [AWS CloudFront Cookies Caching](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html)

## Features

- by default, CloudFront does not consider cookies
- can forward all cookies or a specific set

## Limitations

- if cookies are not forwarded, CloudFront removes them from request before origin!!!
- caching cookies can reduce cache hits
