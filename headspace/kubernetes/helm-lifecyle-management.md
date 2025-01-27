# HELM LIFECYCLE MANAGEMENT

## Commands

### Get list of helm charts installed releases

`helm list`
shows:
- revision #
- chart version
- app version

### Upgrade an installed chart

`helm upgrade eph-nginx`

or to a specific version: example this has 1.23.X
`helm upgrade eph-nginx bitnami/nginx --version 13`

### Get history of chart release

`helm history eph-nginx`

### Rollback chart release to a specific revision

`helm rollback eph-nginx 1`