# TERRAFORM KUBERNETES NGINX KIND HELM PLAYGROUND

## Features
Stands up a multi-node kind cluster with nginx as the ingress.
- multi-node KIND cluster creation
- kind config for external connectivity

## Commands
ensure docker / orbstack is running. KIND cluster is managed in Terraform as well.

### Run terraform
```bash
terraform init
terraform plan
terraform apply --auto-approve
terraform destroy --auto-approve
```

### Create an ingress / svc for testing
```bash
kubectl apply -f https://kind.sigs.k8s.io/examples/ingress/usage.yaml
# test connectivity
curl localhost/foo
```
