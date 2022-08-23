# CURL

## Resources

- [Curl aws-sigv4 docs](https://curl.se/docs/manpage.html#--aws-sigv4)

## Example

```console
curl -X POST "${ENDPOINT}" \
    -d $DATA \
    --user $AWS_ACCESS_KEY:$AWS_SECRET_KEY \
    --aws-sigv4 "aws:amz:${REGION}:${SERVICE}"
```
