# AWS EC2 METADATA

## Resources

- [AWS EC2 Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)

## Limitations

## Check Metadata While SSH'd In To Instance

NO SUCH THING as user-data for an instance as a curl

```console
curl http://169.254.169.254/latest/meta-data
```
