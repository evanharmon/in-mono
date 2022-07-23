# AWS CLOUDFRONT CACHING IMPROVE CACHE HIT RATIO

## Resources

- [AWS CloudFront Improve Cache Hit Ratio](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cache-hit-ratio.html)

## Caching based on Query String Params

- only forward query string params where origin returns unique objects
- enforce consistent casing on query string params
- list params in same order

## Caching based on Cookie values

- forward only specified cookies intead of forwarding all cookies

- Create separate cache behaviors for static and dynamic content, and configure
  CloudFront to forward cookies to your origin only for dynamic content

- create separate cache behaviors for dynamic content when cookie value is
  unique for each user, and another behavior for dynamic content that varies
  based on a small number of unique values

## Caching based on request headers

- forward and cache specific headers instead of all
