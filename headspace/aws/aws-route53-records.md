# AWS ROUTE 53 RECORD EXAMPLES

## Alias record to s3 buckets

S3 bucket name must match the A record EXACTLY
`www.mydomain.com`
`http://www.mydomain.com.s3-website-us-west-2.amazonaws.com`

## MX Records

Do not use any prefixes in name

Name field must be left completely blank - so it's a naked domain with MX Records
mx.mydomain.com with MX records will fail

## Use with 3rd Party Registrar

update NS record to point to third party

## Alias record for root domain

```json
[
  {
    "Name": "evanharmon.link.",
    "Type": "A",
    "AliasTarget": {
      "HostedZoneId": "Z2222222222222",
      "DNSName": "d2222222222222.cloudfront.net.",
      "EvaluateTargetHealth": false
    }
  },
  {
    "Name": "www.evanharmon.link.",
    "Type": "A",
    "AliasTarget": {
      "HostedZoneId": "Z2222222222222",
      "DNSName": "d2222222222222.cloudfront.net.",
      "EvaluateTargetHealth": false
    }
  }
]
```
