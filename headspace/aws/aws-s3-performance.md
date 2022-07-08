# AWS S3 PERFORMANCE

## Resources

- [AWS S3 Best Practices Optimize Performance](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html)

## Prefixes

performance is gated per prefix. Try not to design storage where lots of files exist in
a single prefix

## Basic Performance
typical latency is 100 - 200 milliseconds for small objects (first-byte-out for larger objects)

per prefix:
- 3,500 PUT/COPY/POST/DELETE reqeust per second
- 5,500 GET/HEAD request per second