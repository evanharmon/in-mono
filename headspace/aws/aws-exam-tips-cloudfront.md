# AWS EXAM TIPS CLOUDFRONT

## Signed URLs

use for restricted access to single files

## Signed Cookies

use for restricted access to MULTIPLE files

## Forwarding Headers

- do not cache on `Date` or `User-Agent` headers!
- only affects cache'ing - CloudFront still forwards all the request headers
- Forwarding all headers results in every request going to origin - aka no cache!
- don't forward Authorization HTTP header for static cache behaviors
- ok to use Host header as should be consistent value

## Forwarding Cookies

- unlike headers, CloudFront removes cookies not on allowed Forwarding list
- use cookies only on dynamic content caches

## Custom Origins

- good use case to reduce traffic spikes on website servers WITHOUT significant dev effort
