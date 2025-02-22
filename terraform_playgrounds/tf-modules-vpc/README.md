# TF MODULES VPC PLAYGROUND

## Features
playground example for using terraform modules.
- localstack / tflocal handles remote backend automatically

## Requirements

### Install tflocal
`tflocal` for localstack

```bash
python3 -m venv .venv
source ./.venv/bin/activate
pip install terraform-local
```

## Commands

### Start localstack
requires docker / orbstack running.
`localstack start -d`

### Create resources
```bash
tflocal init
tflocal plan
tflocal apply --auto-approve
tflocal delete --auto-approve
```

### Check aws resources
use `--endpoint-url` for localstack
```bash
export AWS_ACCESS_KEY_ID="test"
export AWS_SECRET_ACCESS_KEY="test"
export AWS_DEFAULT_REGION="eu-west-1"
aws --endpoint-url=http://localhost:4566 ec2 describe-vpcs
```

or setup a proper aws config / credentials file
```bash
mkdir -p ~/.aws && touch ~/.aws/config
cat > ~/.aws/config <<EOF
[profile localstack]
region=us-east-1
output=json
endpoint_url = http://localhost:4566
EOF
mkdir -p ~/.aws && touch ~/.aws/credentials
cat > ~/.aws/credentials <<EOF
[localstack]
aws_access_key_id=test
aws_secret_access_key=test
EOF
aws --profile localstack ec2 describe-vpcs
```

### Stop localstack
also will delete AWS resources in ephemeral state
`localstack stop`