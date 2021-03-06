# AWS ECS

## Resources

- [AWS ECS GH Awesome](https://github.com/nathanpeck/awesome-ecs)
- [AWS ECS Local Dev Blog](https://aws.amazon.com/blogs/compute/a-guide-to-locally-testing-containers-with-amazon-ecs-local-endpoints-and-docker-compose/)
- [AWS ECS GH Local Dev Repo](https://github.com/awslabs/amazon-ecs-local-container-endpoints<Paste>)
- [AWS Private ECS Fargate](https://aws.amazon.com/blogs/compute/access-private-applications-on-aws-fargate-using-amazon-api-gateway-privatelink/)
- [AWS ECS Agent Updates](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html)
- [AWS ECS AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html)
- [AWS ECS Cloudwatch Container Insights](https://aws.amazon.com/blogs/mt/introducing-container-insights-for-amazon-ecs/)

## Steps To Create ECS cluster

(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/get-set-up-for-amazon-ecs.html#create-an-iam-role)

1. Create VPC
2. Create Subnet
3. Create Security Group
4. Create Keypair
5. Create IAM Role ecsInstanceRole using EC2 Role for Elastic Container Service,
   AmazonEC2ContainerServiceforEC2Role policy
6. Create instance with UserData to join cluster

## UserData To Join Cluster

```sh
#!/bin/bash
echo ECS_CLUSTER=your_cluster_name >> /etc/ecs/ecs.config
```

## Steps To Create ECS cluster

(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/get-set-up-for-amazon-ecs.html#create-an-iam-role)

1. Create VPC
2. Create Subnet
3. Create Security Group
4. Create Keypair
5. Create IAM Role ecsInstanceRole using EC2 Role for Elastic Container Service,
   AmazonEC2ContainerServiceforEC2Role policy
6. Create instance with UserData to join cluster

## UserData To Join Cluster

```sh
#!/bin/bash
echo ECS_CLUSTER=your_cluster_name >> /etc/ecs/ecs.config
```

## Log File Locations

- [AWS ECS Logs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/logs.html)

## Log In To ECR

ON EC2

```console
export AWS_ACCOUNT_ID="$(aws sts get-caller-identity --query Account --output text)"
export AWS_DEFAULT_REGION='us-east-1'
sudo echo "$(aws ecr get-authorization-token | \
  sudo jq -r '.authorizationData[].authorizationToken' | \
  sudo base64 -d | sudo cut -d: -f2)" | \
  sudo docker login -u AWS \
    "https://$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO" \
    --password-stdin
```

afterwards delete creds

```console
rm -rf /root/.docker/config.json
```
