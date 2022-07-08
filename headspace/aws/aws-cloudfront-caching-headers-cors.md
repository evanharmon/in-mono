# AWS CLOUDFRONT CACHING HEADERS CORS

## Resources

- [AWS CloudFront Configure to respect CORS Settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html#header-caching-web-cors)

## S3 Cors cache with OPTIONS

cache options: choose options for default cache behavior settings
that enables caching OPTIONS responses

configure CloudFront to forward following headers:

`Origin`
`Access-Control-Request-Headers`
`Access-Control-Request-Method`

## S3 Cors cache without OPTIONS

configure CloudFront to forward following headers:

`Origin`
`Access-Control-Request-Headers`
`Access-Control-Request-Method`

## Custom Origin

Forward `Origin` header along with any other headers you require

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