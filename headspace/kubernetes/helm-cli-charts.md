# HELM CLI CHARTS

## Commands

### List charts installed in the cluster

`helm list`

### Pull down a helm chart in compressed form

```bash
helm pull bitnami/wordpress
# or uncompress to a folder
# default folder name will be the chart name `wordpress`
helm pull --untar bitnami/wordpress
```

### Install a chart from local folder
format: `helm install <release_name> <chart_name>`
`helm install eph-release ./chart_name`

### Install a chart in to a cluster
format: `helm install <release_name> <chart_name>`

```bash
helm install nginx-ingress-controller \
  --set defaultBackend.serviceName=nginx-ingress-controller-service \
  --set ingressClassName=ingress-nginx
helm install eph-teleport teleport/teleport-cluster <additional-args>
```

use custom values:
```bash
helm install \
    --values custom-values.yaml \
    eph-nginx-ingress-controller nginx-ingress-controller
```

### Uninstall a chart

`helm uninstall nginx-ingress-controller`

### Upgrade a helm chart

`helm upgrade eph-nginx bitnami/nginx`

### Show values for a chart

`helm show values secrets-store-csi-driver/secrets-store-csi-driver`