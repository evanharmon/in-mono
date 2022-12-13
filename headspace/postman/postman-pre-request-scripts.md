# POSTMAN PRE-REQUEST SCRIPTS

## Resources

- [HMAC pre-request](https://torbjornzetterlund.com/how-to-use-hmac-with-postman-to-test-webhooks/)

## HMAC Signing for web hooks

- sets `hmac` environment variable
- reads `secret` environment variable

```js
postman.setEnvironmentVariable(
  'hmac',
  CryptoJS.HmacSHA256(
    request.data,
    postman.getEnvironmentVariable('secret'),
  ).toString(CryptoJS.digest),
)
```
