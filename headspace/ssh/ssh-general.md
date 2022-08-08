# SSH

## Resources

- [SSH AWS Guide](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)

## .SSH Folder

Make sure key file is in .ssh folder and has private permissions

```console
chmod 400 /path/my-key-pair.pem
```

## Log in with Reference Key File

```console
ssh -i $HOME/.ssh/my-key-pair.pem \
  ec2-user@ec2-54-0-0-123.compute-1.amazonaws.com
```

## OS X Port Forwarding

```console
ssh-add -K mykeypair.pem
ssh -A ec2-user@54.0.0.123
```

## LINUX Port Forwarding

```console
ssh-add -c mykeypair.pem
ssh -A ec2-user@54.0.0.123
```
