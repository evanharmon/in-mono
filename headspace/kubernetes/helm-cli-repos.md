# HELM CLI REPOS

## Commands

### List repos

`helm repo list`

### Update repos

`helm repo update`

### Search for a chart on artifact hub

`helm search hub prometheus`

### Search for a chart in a repository
repo has to have been added of course

`helm search repo teleport operator`

### List downloaded versions of a chart

`helm search repo bitnami/nginx`

### Add a chart repository

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx/release-1.6
helm repo add teleport https://charts.releases.teleport.dev
helm repo add bitnami https://charts.bitnami.com/bitnami
helm rep add hashicorp https://helm.releases.hashicorp.com
```

### Remove a chart repository

`helm repo remove hashicorp`
