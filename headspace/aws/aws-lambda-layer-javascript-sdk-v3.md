# AWS LAMBDA LAYERS

really annoying as lambda's preload with the v2 sdk

## Resources

- [AWS Lambda Layer of AWS Javascript SDK v2](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-layer-aws-sdk-latest-version/)

## V3

for v3, follow the above but do specific installs for modules needed

example:

```console
npm install @aws-sdk/client-sts
```

cli upload command:

```console
aws lambda publish-layer-version --layer-name aws_js_sdk_v3_sts --description "js v3 sts client" --license-info "MIT" --compatible-runtimes nodejs16.x --zip-file fileb://../package.zip --region "us-east-1"
```
