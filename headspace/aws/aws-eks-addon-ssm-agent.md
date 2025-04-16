# AWS EKS ADDON SSM AGENT

## Resources
- [EKS blueprint addon ssm agent](https://aws-quickstart.github.io/cdk-eks-blueprints/addons/ssm-agent/)
- [EKS blueprint ssm agent tcp tunnel](https://aws-quickstart.github.io/cdk-eks-blueprints/addons/ssm-agent/#use-case-private-clusters)

## Features
ensures SSM agent runs on all worker nodes
- allows sessions in to agents

## Use cases
sessions in to nodes of course
NOT needed for bottlerocket instances - already on them

### Private cluster kube API access
NOTE: doesn't work on bottlerocket :(
SSM can be used to get use a worker node as TCP jump box to access EKS cluster api

1. **Create TCP Tunnel**
```bash
# Get the Cluster API endpoint first
CLUSTER_NAME=<insert your cluster name, e.g. blueprint-construct-dev>

CLUSTER_API=$(aws eks describe-cluster --name $CLUSTER_NAME | jq -r '.cluster.endpoint' | awk -F/ '{print $3}')

aws ssm send-command \
  --instance-ids $instance_id \
  --document-name "AWS-RunShellScript" \
  --comment "tcp tunnel to cluster api" \
  --parameters commands="nohup sudo socat TCP-LISTEN:443\,fork TCP:$CLUSTER_API:443 &"
```

2. **Update KUBECONFIG**
`sed -i -e "s/https:\/\/$CLUSTER_API/https:\/\/$CLUSTER_API:8443/" ~/.kube/config`

3. **Update /etc/hosts**
`sudo echo "127.0.0.1 $CLUSTER_API" >> /etc/hosts`

4. **Start SSM session**
```bash
aws ssm start-session \
  --target $instance_id \
  --document-name AWS-StartPortForwardingSession \
  --parameters '{"portNumber":["443"], "localPortNumber":["8443"]}'
```
