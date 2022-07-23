# AWS EXAM TIPS CLOUDFRONT

## Signed URLs

use for restricted access to single files

## Signed Cookies

use for restricted access to MULTIPLE files

## Forwarding Headers

- only affects cache'ing - CloudFront still forwards all the request headers
- Forwarding all headers results in every request going to origin - aka no cache!

## Forwarding Cookies

unlike headers, CloudFront removes cookies not on allowed Forwarding list
