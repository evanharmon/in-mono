# AWS LAMBDA NODE.JS

## Resources

- [AWS Blogs Lambda Async / Await](https://aws.amazon.com/blogs/compute/node-js-8-10-runtime-now-available-in-aws-lambda/)
- [AWS Javascript SDK v2 Stream S3](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/requests-using-stream-objects.html)
- [SDK Version By Node Version](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- [AWS Lambda Nodejs Context Object](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html)

## Access Credentials For Function

available as environment variables

```console
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_SESSION_TOKEN
```

### Check Identity Via Context

Will only work if called with identity pool NOT user pool

```console
exports.handler = async function(event, context) {
  console.log('Remaining time: ', context.getRemainingTimeInMillis())
  console.log('Function name: ', context.functionName)
  return context.logStreamName
}
```

### Tests

Inline test in `index.js` that only runs when invoked from CLI

```javascript
if (!module.parent) { console.log(do test lines here) }
```
