# AWS S3 Intelligent Tiering

## Resources

- [AWS S3 Intelligent Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html)
- [AWS S3 Intelligent Tiering Tiers](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html)

## Features

- recommended class for unknown, unpredictable, or changing access patterns on S3
- smaller objects always stored in Frequent Access Tier
- no retrieval charges

## Limitations

- objects less th an 128 KB are not monitored or eligible

## Pricing

- pay monthly monitoring and automation charge

## Frequent Access Tier

- default

## Infrequent Access Tier

- objects not accessed for 30 consecutive days

## Archive Instant Access Tier

- objects not accessed for 90 consecutive days

## Archive Access Tier

optional tier, recommended value for use greater than 90 days 

- auto archives on no access for 90 consecutive days
- customizable last access time up to 730 days

## Deep Archive Access Tier

optional tier, recommended for only asynchronous access
