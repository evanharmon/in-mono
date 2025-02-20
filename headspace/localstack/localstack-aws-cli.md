# LOCALSTACK AWS CLI

## Features
Use the aws cli against localstack

## Requirements

`--endpoint-url` flag must be passed and point to localstack

## Examples

#### SQS Create Queue

create queue

```bash
aws --endpoint-url=http://localhost:31000 sqs create-queue --queue-name my-best-queue
```

#### SQS Send Messages

note the queue fully qualified domain name with `/queue/` in path.
`aws --endpoint-url=http://localhost:31000 --profile="default" sqs list-queues` to get queue url's

```bash
export AWS_PROFILE="default"
export Q_NAME="myqueue" 
export ENDPOINT_URL="http://localhost:31000"
aws --endpoint-url=$ENDPOINT_URL \
	sqs send-message-batch \
	--queue-url $ENDPOINT_URL/queue/$Q_NAME \
	--entries file://cli-input.json
```