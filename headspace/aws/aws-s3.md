# AWS S3

## Resources

- [AWS Simple Storage Service S3 Docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

# Features

- Key / Value Pair
- Availability: 99.99%
- Durability: 11 9's - 99.99999999999%
- Object based storage - not an OS or Database

## Headers

x-amz-content-sha256
x-amz-date
x-amz-security-token

## Consistency

- read after write consistency for PUTS of new Objects
- eventual consistency for overwrite PUTS and DELETES
  (can take some time to propogate)

## Concurrent Facility Fault Tolerance

2

## Naming Conventions

Names must be lowercase
Universal Namespace (like DNS)

## Features

## Limitations

- 100 buckets by default
- PUT limited to 0 Byte to 5GB
- not block store, so does not support file append

## Invalid Bucket Names

capitalization only works in US-Standard-Region US-EAST-1
`.myawsbucket`
`myawsbucket.`
`my..awsbucket`
`myAwsBucket`
