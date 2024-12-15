# DOCKER VOLUMES

## Resources

- [Docker Volumes Docs](https://docs.docker.com/storage/volumes/)
- [Docker Volumes AWS Blog Post EBS](https://aws.amazon.com/blogs/compute/amazon-ecs-and-docker-volume-drivers-amazon-ebs/)
- [Docker Volumes SO Mount s3 as volume](https://stackoverflow.com/questions/52041550/mount-s3-bucket-as-filesystem-on-aws-ecs-container)

## Features

## Volume drivers
do not handle storage - just the volumes.

- local
- azure file storage
- convoy
- gce-docker
- rexray (supports GCP, AWS, etc)
- vmware vsphere storage

## Mount volume on docker run

```sh
docker run --mount `pwd`:`pwd` -w `pwd` -i -t ubuntu pwd
docker run --read-only --mount type=bind,source=/User/me/.aws,target=/home/ec2-user/.aws -i -t ubuntu pwd
```

## Mount volume specifying storage driver

```sh
docker run -it \
  --name mysql
  --volume-driver rexray/ebs
  --mount src=ebs-vol,target=/var/lib/mysql
  mysql
```