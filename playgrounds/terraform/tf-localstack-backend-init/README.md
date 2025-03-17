# TF LOCALSTACK BACKEND INIT

## Features
NOTE: not tested yet in a separate playground...
bootstrap for a remote backend to use with localstack.
The `tflocal init` is another option which can auto-generate s3 backend and dynamodb table for locking.
`tflocal` is much quicker / easier.
Parking this as an example playground of directly using `terraform` cli instead.
- uses a local backend for state

## Commands

### Start localstack
requires docker / orbstack running.
`localstack start -d`

### Create resources
```bash
terraform init
terraform plan
terraform apply
```

### Stop localstack
also will delete AWS resources in ephemeral state
`localstack stop`