# AWS APIGATEWAY CORS

## Resources

- [AWS API Gateway Enabling Cors](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html)

## Enable Cors Options

- `Access-Control-Allow-Credentials` must be set to `'true'` with quotes

## Test Cors

```console
curl -v -X OPTIONS https://{restapi_id}.execute-api.{region}.amazonaws.com/{stage_name}
```
