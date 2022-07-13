# AWS CLOUDFORMATION CLI

## Filter JSON Response

```console
aws cloudformation describe-stacks |jq '.Stacks[0].StackId'
```

## Set Shell Variable From JSON

```console
stackname=$(aws cloudformation describe-stacks | jq '.Stacks[0].StackName')
```

## Create Stack With Parameters

```console
aws cloudformation create-stack \
  --stack-name myteststack \
  --template-body file://home/testuser/mytemplate.json \
  --parameters ParameterKey=Parm1,ParameterValue=test1 ParameterKey=Parm2,ParameterValue=test2
```

## Create Stack With Parameters And IAM_PROFILE

```console
aws cloudformation create-stack \
  --stack-name logs \
  --template-body file://base-logging.yaml \
  --profile hss-sandbox \
  --region us-west-2 \
  --parameters ParameterKey=pNotifyEmail,ParameterValue="evan.harmon@harmonsoftwaresolutions.com" \
  --capabilities CAPABILITY_IAM
```

## Upload Stack Template To S3

here for convenience
`aws s3 cp test.txt s3://mybucket/test2.txt`

## Launch Stack Template With Params File

```console
aws cloudformation create-stack \
  --stack-name test \
  --template-url https://s3.us-west-2.amazonaws.com/mybucket/mytemplate.yml \
  --cli-input-json file://myparams.json \
  --capabilities CAPABILITY_IAM
```

## Update Stack Template

```console
aws cloudformation update-stack \
  --stack-name test \
  --template-url S3://mybucket/test2.yaml
```

## CLI Multiple Parameters

```console
aws create-stack \
  --parameters ParameterKey=subnet1AZ,ParameterValue=us-east-2a ParameterKey=subnet2AZ, ParameterValue=us-east-2b ParameterKey=subnet3AZ,ParameterValue=us-east-2c
```

## Template bucket referenced does not exist - s3 url

need to use this format

```console
aws cloudformation create-stack \
    --stack-name test \
    --template-url https://s3-west-2.amazonaws.com/bucket/template.yaml
```
