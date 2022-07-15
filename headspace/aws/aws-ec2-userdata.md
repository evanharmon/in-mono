# AWS EC2 USERDATA

## Resources

- [AWS EC2 User data and shell scripts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html#user-data-shell-scripts)

## Limitations

- only runs on boot cycle when first launching instance
- cannot curl 169.254.169.254/latest/\* for userdata

## View Script Of Userdata On Instance

```console
cat /var/lib/cloud/instance/scripts/part-001
cat /var/lib/cloud/instances/$INSTANCE_ID/user-data.txt
```
