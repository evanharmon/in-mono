# AWS API GATEWAY ERRORS

## Service / Operation Name Not Authorized
If using Lambda proxy, it has to be a `post`!

`apigateway Unable to determine service/operation name to be authorized`

## 502
check for incompatible output on lambda proxy integration
like not handling an OPTIONS request with a valid response

## 504
could be API gateway timeout after 29 seconds