# DOCKER VOLUMES

## Resources

- [Docker Volumes Docs](https://docs.docker.com/storage/volumes/)
- [Docker Volumes AWS Blog Post EBS](https://aws.amazon.com/blogs/compute/amazon-ecs-and-docker-volume-drivers-amazon-ebs/)
- [Docker Volumes SO Mount s3 as volume](https://stackoverflow.com/questions/52041550/mount-s3-bucket-as-filesystem-on-aws-ecs-container)

## Mount Volume On Docker Run

```console
docker run -v `pwd`:`pwd` -w `pwd` -i -t ubuntu pwd
docker run --read-only -v /User/me/.aws:/home/ec2-user/.aws -i -t ubuntu pwd
```
