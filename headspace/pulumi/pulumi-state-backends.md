# PULUMI STATE AND BACKENDS

## Resources

- [Pulumi state and backends](https://www.pulumi.com/docs/intro/concepts/state/)
- [Pulumi s3 backend](https://www.pulumi.com/docs/intro/concepts/state/#aws-s3)
- [Pulumi advanced state](https://www.pulumi.com/docs/intro/concepts/state/#advanced-state)

## Features

- supports cloud providers storage
- does not store any credential info in state

## Pulumi Service

pulumi manages state using their backend

this is the default backend and available at `app.pulumi.com`

## Self-managed state backend options

- S3
- Azure Blob Storage
- Google Cloud Storage
- compatible s3 servers like `minio` or `ceph`
- local filesystem

## Credentials

credentials are stored by default at `~/.pulumi/credentials.json`

## Login to Pulumi state backend service

```console
pulumi login
```

## Logout of Pulumi state backend service

```console
pulumi logout
```

## Check who is logged in

```console
pulumi whoami -v
```

## Self-managed backends

can have limitations compared to full Pulumi service.
Pulumi service has checkpoints / db transactions, etc
