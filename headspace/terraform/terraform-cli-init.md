# TERRAFORM CLI INIT

## Features
does not directly interact with state in an s3 bucket
- initializes working directory
- downloads necessary provider plugins
- state file is initially stored locally in .terraform.tfstate
- auto downloads modules

## Commands

### Reconfigure State File

disregards any existing configuration of state

`terraform init -reconfigure`
