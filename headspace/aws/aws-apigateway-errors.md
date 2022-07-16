# AWS API GATEWAY ERRORS

## Service / Operation Name Not Authorized

If using Lambda proxy, it has to be a `post`!

`apigateway Unable to determine service/operation name to be authorized`

## 403

access denied / WAF

## 429

quota exceeded, throttled

## 502

- check for incompatible output returned by lambda proxy integration (OPTIONS request for example)
- out of order invocations from heavy load

## 503

service unavailable

## 504

could be API gateway timeout after 29 seconds
