# TERRAFORM CLI APPLY

## Apply commands

### Apply a saved plan file

`terraform apply tfplan`

### Force Serial Deployment

helps avoid lambda permission resource exception issues

`terraform apply --parallelism=1 tfplan`