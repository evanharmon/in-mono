# AWS CODE DEPLOY EC2

## Resources

- [AWS CodeDeploy EC2 Deployments](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-server.html)
- [AWS CodeDeploy Working with Instances](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances.html)
- [AWS CodeDeploy Working with CodeDeploy Agent](https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent.html)

## Features

- in place updates on instances (no ASG)
- supports hooks to verify deployment success

## Install Agent

```console
sudo yum update
sudo yum install ruby
sudo yum install wget
cd /home/ec2-user
wget https://aws-codedeploy-us-west-2.s3.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
```

## Check Logfiles

/var/log/aws/codedeploy-agent
```txt
https://api.github.com/repos/harmonsoftwaresolutions/dianabr
esson-www/commit/8e2593c34615b59d72cb4b7f5a3f7f3e4d0ce2cf/tarball/8e2593c34615b59d72cb4b7f5a3f7f3e4d0ce2cf
```
