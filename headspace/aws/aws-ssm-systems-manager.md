# AWS SSM SYSTEMS MANAGER

great for managing applications and infrastructure across cloud and on-premise

## Resources

- [AWS SSM Systems Manager Docs](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html)
- [AWS SSM AWS BLOG CF Template To Debug Instances Not Joining SSM](https://aws.amazon.com/blogs/mt/reporting-and-remediating-ec2-instances-that-aws-systems-manager-doesnt-list-as-managed-instances/)

## Run Docker Commands

Must switch to root user first. For ECR permissions, i've found it easiest to
export key / secret / session token which is a temporary cred for my admin user

```console
sudo su
docker image ls
```
